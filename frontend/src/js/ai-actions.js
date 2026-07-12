let selectedText = null
let currentSelectionRange = null;

document.addEventListener('DOMContentLoaded', () => {
  const writerDiv = document.getElementById('ceWriterDiv');
  const selectionIcon = document.getElementById('ceSelectionIcon');
  let selectedTextSnapshot = ""; // Store chosen text globally to pass it to the popup

  // 1. Listen for user selections globally
  document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    
    // Safety check: ensure selection is valid, contains text, and is inside our editor
    if (!sel || sel.isCollapsed || !sel.toString().trim() || !writerDiv.contains(sel.anchorNode)) {
      selectionIcon.style.display = 'none';
      return;
    }

    selectedTextSnapshot = sel.toString().trim();
    const range = sel.getRangeAt(0);
    currentSelectionRange = range.cloneRange();

    const rects = range.getClientRects();

    if (rects.length > 0) {
      // Get structural layout details relative to the visible window viewport
      const rect = rects[0]; 
      
      // Calculate coordinates relative to document flow (accounting for scrolling)
      const topPosition = rect.top + window.scrollY - 8; // 8px margin safety gap above text
      const leftPosition = rect.left + window.scrollX + (rect.width / 2); // Perfectly centered

      selectionIcon.style.top = `${topPosition}px`;
      selectionIcon.style.left = `${leftPosition}px`;
      selectionIcon.style.display = 'flex';
    }
  });

  // Hide the floating icon instantly if the user clicks anywhere else
  document.addEventListener('mousedown', (e) => {
    if (e.target !== selectionIcon && !writerDiv.contains(e.target)) {
      selectionIcon.style.display = 'none';
    }
  });

  // 2. Click handler for the floating action icon
  selectionIcon.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Clear the active cursor highlight selection gracefully
    window.getSelection().removeAllRanges();
    selectionIcon.style.display = 'none';

    selectedText = selectedTextSnapshot;
    showTopPopup(selectedText);
  });
});

// 3. Popup Utilities
function showTopPopup(message) {
  const popup = document.getElementById('ceTopPopup');

  if (!popup) return;

  popup.style.display = 'block';

  requestAnimationFrame(() => {
    popup.classList.add('show');
  });
}

function closeTopPopup() {
  const popup = document.getElementById('ceTopPopup');
  if (!popup) return;

  popup.classList.remove('show');
  
  // Wait out the CSS layout opacity transition before setting visibility to none
  setTimeout(() => {
    if (!popup.classList.contains('show')) {
      popup.style.display = 'none';
    }
  }, 300);
}

// function submitPrompt() {
//   const prompt = document.getElementById("cePromptInput").value;
  
//   console.log("Prompt:", prompt);
//   console.log("Text Selected:", selectedText);
//   console.log("Text Sel Range:", currentSelectionRange);
// }


async function submitPrompt() {
  const inputEl = document.getElementById('cePromptInput');
  if (!inputEl) return;

  const promptText = inputEl.value.trim();
  if (!promptText) return;

  if (!currentSelectionRange) {
    alert("يرجى تحديد النص في المحرر أولاً.");
    return;
  }

  const selectedTextText = currentSelectionRange.toString();

  // 1. Prepare container for live injection
  currentSelectionRange.deleteContents();
  
  // Create a document fragment wrapper to hold our streaming nodes securely
  const streamContainer = document.createElement('span');
  currentSelectionRange.insertNode(streamContainer);
  currentSelectionRange = null;

  // Track the active text node we are writing text characters into
  let currentActiveTextNode = document.createTextNode("");
  streamContainer.appendChild(currentActiveTextNode);
  try {
    const response = await fetch('http://localhost:8000/ai/write', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // "selected_text": selectedTextText,
        "prompt": promptText,
        "language": "ar"
      })
    });

    if (!response.ok || !response.body) {
      throw new Error("فشلت عملية الاتصال بالخادم");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let packets = buffer.split('\n\n');
      buffer = packets.pop();

      for (let packet of packets) {
        if (!packet.trim()) continue;

        const lines = packet.split('\n');
        let dataBuffer = [];
        
        for (const line of lines) {
          if (line.startsWith('data:')) {
            let val = line.substring(5);
            if (val.startsWith(' ')) {
              val = val.substring(1);
            }
            dataBuffer.push(val);
          }
        }

        if (dataBuffer.length === 0) continue;
        let rawChunk = dataBuffer.join('\n');

        if (rawChunk.trim() === "[DONE]") {
          break;
        }

        const components = rawChunk.split(/(\n)/g);

        for (const item of components) {
          if (item === '\n') {
            streamContainer.appendChild(document.createElement('br'));
            currentActiveTextNode = document.createTextNode("");
            streamContainer.appendChild(currentActiveTextNode);
          } else if (item) {
            currentActiveTextNode.appendData(item);
          }
        }
      }
    }

    inputEl.value = ""; 
    closeTopPopup();

  } catch (error) {
    console.error("Streaming error:", error);
    currentActiveTextNode.appendData(` [خطأ: ${error.message}] `);
  }
}

const submitButton = document.getElementById("cePromptSubmit");
submitButton.addEventListener("click", async () => {
   await submitPrompt()
});
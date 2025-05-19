// Sample data for messages
const messageData = [
  {
    id: "1",
    name: "Jan Mayer",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/493b1a9bd3070f8308547b163ceca19913e38a52?placeholderIfAbsent=true",
    preview: "We want to invite you for a qui...",
    time: "12 mins ago",
    isActive: true
  },
  {
    id: "2",
    name: "Joe Bartmann",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/b4bcc8d481c1c114d0f43f94b934be164da854a8?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "3",
    name: "Ally Wales",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/85638d5dc60559c3a89b0d8a69e25778c3565644?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "4",
    name: "James Gardner",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/2c6a3c349f6de0b2571f84acfbb4f94c04172b23?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "5",
    name: "Allison Geidt",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/fef82db2b75d5d544aa9552e6bb91d32a8daf8a3?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "6",
    name: "Ruben Culhane",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/5f2a48db6d4efefc0f55a7930a70946f3166116c?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "7",
    name: "Lydia Diaz",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/e22b79cedaa747dc4082c4909b5020704fe04cac?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "8",
    name: "James Dokidis",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/723750cb801b0591f8a444a23ed51ec159d1e02e?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  },
  {
    id: "9",
    name: "Angelina Swann",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/1b2d4186dd2c4e31bc892b53ac73e757c3b9ce03?placeholderIfAbsent=true",
    preview: "Hey thanks for your interview...",
    time: "3:40 PM"
  }
];

// Sample data for chat messages
const chatMessages = [
  {
    id: "msg1",
    sender: "Jan Mayer",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/493b1a9bd3070f8308547b163ceca19913e38a52?placeholderIfAbsent=true",
    content: [
      "Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work.",
      "We want to invite you for a quick interview"
    ],
    time: "12 mins ago"
  },
  {
    id: "msg2",
    sender: "You",
    avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/2c6a3c349f6de0b2571f84acfbb4f94c04172b23?placeholderIfAbsent=true",
    content: [
      "Hi Jan, sure I would love to. Thanks for taking the time to see my work!"
    ],
    time: "12 mins ago",
    isUser: true
  }
];

// Emoji list for emoji picker
const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙',
  '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥',
  '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮',
  '👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉',
  '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕',
];

// DOM Elements
let messagesContainer;
let chatMessagesContainer;
let messageForm;
let messageInput;
let attachmentButton;
let fileInput;
let emojiButton;
let emojiPickerContainer;

// Contact information - Used to display chat header
const contactInfo = {
  name: "Jan Mayer",
  avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/493b1a9bd3070f8308547b163ceca19913e38a52?placeholderIfAbsent=true",
  title: "Recruiter at Nomad"
};

// Notification Panel Functionality
const notificationButton = document.getElementById('notificationButton');
const notificationPanel = document.getElementById('notificationPanel');
const markReadButton = document.querySelector('.mark-read');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  messagesContainer = document.querySelector('.messages-container');
  chatMessagesContainer = document.querySelector('.chat-messages');
  messageForm = document.querySelector('.message-input-form');
  messageInput = document.querySelector('.message-input');
  attachmentButton = document.querySelector('.attachment-button');
  fileInput = document.querySelector('#file-input');
  emojiButton = document.querySelector('.emoji-button');
  emojiPickerContainer = document.querySelector('.emoji-picker');

  // Initialize message list and chat
  renderMessageList();
  renderChatMessages();

  // Set up click handlers for UI elements
  document.querySelector('.search-input')?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Set up message sending
  messageForm?.addEventListener('submit', handleSendMessage);
  
  // Set up file input
  if (attachmentButton && fileInput) {
    attachmentButton.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', handleFileSelection);
  }

  // Set up emoji picker
  if (emojiButton && emojiPickerContainer) {
    emojiButton.addEventListener('click', toggleEmojiPicker);
    // Close emoji picker when clicking outside
    document.addEventListener('click', (e) => {
      if (emojiPickerContainer.style.display === 'flex' && 
          !emojiPickerContainer.contains(e.target) && 
          e.target !== emojiButton) {
        emojiPickerContainer.style.display = 'none';
      }
    });
  }

  // Toggle notification panel
  notificationButton.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationPanel.classList.toggle('active');
  });

  // Close notification panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!notificationPanel.contains(e.target) && !notificationButton.contains(e.target)) {
      notificationPanel.classList.remove('active');
    }
  });

  // Mark all notifications as read
  markReadButton.addEventListener('click', () => {
    const notificationDot = document.querySelector('.notification-dot');
    const notificationTags = document.querySelectorAll('.notification-tag');
    
    // Remove notification dot
    if (notificationDot) {
      notificationDot.style.display = 'none';
    }
    
    // Remove notification tags
    notificationTags.forEach(tag => {
      tag.style.display = 'none';
    });
  });
});

// Render message list
function renderMessageList() {
  if (!messagesContainer) return;
  
  messagesContainer.innerHTML = '';
  
  messageData.forEach((message) => {
    const messageItem = document.createElement('div');
    messageItem.className = `message-item ${message.isActive ? 'active' : ''}`;
    messageItem.dataset.id = message.id;
    
    messageItem.innerHTML = `
      <img src="${message.avatar}" class="message-avatar" alt="${message.name}">
      <div class="message-content">
        <div class="message-header">
          <div class="message-sender">${message.name}</div>
          <div class="message-time">${message.time}</div>
        </div>
        <div class="message-preview">${message.preview}</div>
      </div>
    `;
    
    messageItem.addEventListener('click', () => {
      // Update active state
      const allMessageItems = document.querySelectorAll('.message-item');
      allMessageItems.forEach(item => {
        item.classList.remove('active');
      });
      messageItem.classList.add('active');
      
      // In a real app you would load the selected conversation here
    });
    
    messagesContainer.appendChild(messageItem);
  });
}

// Render chat messages
function renderChatMessages() {
  if (!chatMessagesContainer) return;
  
  chatMessagesContainer.innerHTML = '';
  
  if (chatMessages.length === 0) {
    // Show empty state
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-chat-state';
    emptyState.innerHTML = `
      <div class="empty-chat-content">
        <img src="${contactInfo.avatar}" alt="${contactInfo.name}" class="empty-chat-avatar">
        <div class="empty-chat-name">${contactInfo.name}</div>
        <div class="empty-chat-title"><span class="text-gray">Recruiter at</span> <a href="#" class="nomad-link">Nomad</a></div>
        <div class="empty-chat-message">
          <span class="text-gray">This is the very beginning of your direct message with</span> ${contactInfo.name}
        </div>
      </div>
    `;
    chatMessagesContainer.appendChild(emptyState);
  } else {
    // Show date separator
    const dateSeparator = document.createElement('div');
    dateSeparator.className = 'date-separator';
    dateSeparator.innerHTML = `
      <div class="date-line"></div>
      <div class="date-badge">Today</div>
      <div class="date-line"></div>
    `;
    chatMessagesContainer.appendChild(dateSeparator);
    
    // Render each message
    chatMessages.forEach((message) => {
      const messageBubble = document.createElement('div');
      messageBubble.className = `message-bubble ${message.isUser ? 'user' : ''}`;
      
      let messageContent = '';
      message.content.forEach((text) => {
        messageContent += `<div class="message-text">${text}</div>`;
      });
      
      messageBubble.innerHTML = `
        <img src="${message.avatar}" alt="${message.sender}" class="bubble-avatar">
        <div class="message-details">
          <div class="message-sender-name">${message.sender}</div>
          ${messageContent}
          <div class="message-timestamp">${message.time}</div>
        </div>
      `;
      
      chatMessagesContainer.appendChild(messageBubble);
    });
  }
  
  // Scroll to bottom of chat
  if (chatMessagesContainer.parentElement) {
    chatMessagesContainer.parentElement.scrollTop = chatMessagesContainer.parentElement.scrollHeight;
  }
}

// Handle sending a new message
function handleSendMessage(e) {
  e.preventDefault();
  
  const message = messageInput.value.trim();
  if (message) {
    // Add the new message to the chat
    const newMessage = {
      id: `msg${chatMessages.length + 1}`,
      sender: "You",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2154c3a98ae842dca5d627292a5a4e03/2c6a3c349f6de0b2571f84acfbb4f94c04172b23?placeholderIfAbsent=true",
      content: [message],
      time: "Just now",
      isUser: true
    };
    
    chatMessages.push(newMessage);
    renderChatMessages();
    
    // Clear the input
    messageInput.value = '';
    
    // Scroll to bottom of chat
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
}

// Handle file selection
function handleFileSelection(e) {
  const files = e.target.files;
  if (files.length > 0) {
    // In a real app, you would upload the file to a server
    // For demo purposes, we'll just show the file name in the input
    const fileName = files[0].name;
    
    // Add a placeholder showing the file
    messageInput.value += `[File: ${fileName}] `;
    messageInput.focus();
    
    // Reset the file input to allow selecting the same file again
    fileInput.value = '';
  }
}

// Generate and render emoji picker
function createEmojiPicker() {
  if (!emojiPickerContainer) return;
  
  emojiPickerContainer.innerHTML = '';
  
  emojiList.forEach(emoji => {
    const emojiItem = document.createElement('span');
    emojiItem.className = 'emoji-item';
    emojiItem.textContent = emoji;
    emojiItem.addEventListener('click', (e) => {
      // Insert emoji at cursor position
      insertEmojiAtCursor(emoji);
      e.stopPropagation();
    });
    emojiPickerContainer.appendChild(emojiItem);
  });
}

// Insert emoji at cursor position in message input
function insertEmojiAtCursor(emoji) {
  if (!messageInput) return;
  
  const cursorPos = messageInput.selectionStart;
  const textBeforeCursor = messageInput.value.substring(0, cursorPos);
  const textAfterCursor = messageInput.value.substring(cursorPos, messageInput.value.length);
  
  messageInput.value = textBeforeCursor + emoji + textAfterCursor;
  
  // Set cursor position after inserted emoji
  const newCursorPos = cursorPos + emoji.length;
  messageInput.setSelectionRange(newCursorPos, newCursorPos);
  messageInput.focus();
}

// Toggle emoji picker visibility
function toggleEmojiPicker(e) {
  if (!emojiPickerContainer) return;
  
  if (e) e.stopPropagation();
  
  if (emojiPickerContainer.style.display === 'none' || !emojiPickerContainer.style.display) {
    emojiPickerContainer.style.display = 'flex';
    createEmojiPicker();
  } else {
    emojiPickerContainer.style.display = 'none';
  }
}
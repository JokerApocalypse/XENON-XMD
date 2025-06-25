const fs = require('fs'); const EventEmitter = require('events');

class BaseStore extends EventEmitter { constructor(filePath, options = {}) { super(); this.filePath = filePath; this.maxMessagesPerChat = options.maxMessagesPerChat || 100; this.memoryOnly = options.memoryOnly || false; this.autosaveInterval = options.autosaveInterval || 5000; this.data = { messages: {}, contacts: {}, chats: {} }; this._load();

if (!this.memoryOnly) {
  this._autosave = setInterval(() => this.save(), this.autosaveInterval);
}

}

_load() { try { if (fs.existsSync(this.filePath)) { const raw = fs.readFileSync(this.filePath, 'utf-8'); this.data = JSON.parse(raw); this.emit('load', this.data); } } catch (e) { this.emit('error', e); console.error(Erreur en chargeant ${this.filePath}, e); } }

save() { if (this.memoryOnly) return; try { fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2)); this.emit('save', this.data); } catch (e) { this.emit('error', e); console.error(Erreur en sauvegardant ${this.filePath}, e); } }

addMessage(chatId, message) { if (!this.data.messages[chatId]) this.data.messages[chatId] = []; this.data.messages[chatId].push(message); if (this.data.messages[chatId].length > this.maxMessagesPerChat) { this.data.messages[chatId].shift(); } }

getMessages(chatId) { return this.data.messages[chatId] || []; }

updateContact(id, info) { this.data.contacts[id] = { ...(this.data.contacts[id] || {}), ...info }; }

updateChat(chatId, info) { this.data.chats[chatId] = { ...(this.data.chats[chatId] || {}), ...info }; }

clear() { this.data = { messages: {}, contacts: {}, chats: {} }; this.save(); }

close() { if (this._autosave) clearInterval(this._autosave); this.save(); } }

module.exports = BaseStore;


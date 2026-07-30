# Prompt Manager - Guida all'Uso

## 🎯 Cos'è

**Prompt Manager** è un'applicazione web per registrare, organizzare e gestire i tuoi prompt per AI. Salvati localmente nel browser, i tuoi prompt rimangono sempre sotto il tuo controllo.

---

## ✨ Funzionalità

### Gestione Prompt
- ✅ **Crea** nuovi prompt con titolo, contenuto, categoria e tag
- ✅ **Modifica** prompt esistenti
- ✅ **Elimina** prompt (con conferma)
- ✅ **Segna come preferito** i prompt più importanti

### Organizzazione
- ✅ **Categorie** personalizzate per organizzare i prompt
- ✅ **Tag** multipli per ricerca avanzata
- ✅ **Ricerca** full-text (cerca in titolo, contenuto e tag)
- ✅ **Filtri** per categoria e preferiti
- ✅ **Ordinamento** per data, titolo o categoria

### Operazioni
- ✅ **Copia** il contenuto di un prompt negli appunti
- ✅ **Esporta** tutti i prompt in un file JSON
- ✅ **Importa** prompt da file JSON (backup/restore)

---

## 🚀 Come Usare

### Creare un Nuovo Prompt

1. Clicca sul pulsante **"+ NEW PROMPT"** nella sidebar
2. Compila i campi:
   - **Title**: Titolo descrittivo del prompt
   - **Category**: Categoria (es: Work, Code, Writing, Personal)
   - **Tags**: Tag separati da virgola (es: python, automation, review)
   - **Content**: Il testo completo del prompt
3. Clicca **"SAVE PROMPT"**

### Cercare Prompt

Usa la barra di ricerca nella sidebar:
- Cerca per **titolo**: "Code Review"
- Cerca per **contenuto**: "python function"
- Cerca per **tag**: "automation"

### Filtrare Prompt

**Per Categoria:**
- Clicca su una categoria nella sidebar
- Clicca su "All Categories" per rimuovere il filtro

**Solo Preferiti:**
- Clicca su "Favorites Only" nella sidebar
- Vedrai solo i prompt segnati con la stella

### Modificare un Prompt

1. Trova il prompt che vuoi modificare
2. Clicca sull'icona **✏️** (Edit)
3. Modifica i campi desiderati
4. Clicca **"SAVE PROMPT"**

### Eliminare un Prompt

1. Trova il prompt che vuoi eliminare
2. Clicca sull'icona **🗑️** (Delete)
3. Conferma l'eliminazione

### Esportare/Importare Dati

**Esportare:**
1. Clicca **"EXPORT"** in alto a destra
2. Verrà scaricato un file JSON con tutti i prompt

**Importare:**
1. Clicca **"IMPORT"** in alto a destra
2. Incolla il contenuto JSON nel campo di testo
3. Clicca **"IMPORT DATA"**

---

## 💾 persistenza Dati

I tuoi prompt vengono salvati automaticamente nel **localStorage** del browser:
- ✅ Nessuna configurazione necessaria
- ✅ Accesso offline
- ✅ Nessuna connessione internet richiesta
- ✅ I dati rimangono nel tuo browser

**Attenzione:** I dati sono salvati nel browser locale. Se:
- Cancelli la cache del browser → perdi i dati
- Usi un altro browser → i dati non sono disponibili
- Usi la modalità incognito → i dati vengono persi alla chiusura

**Consiglio:** Usa la funzione **Export** periodicamente per creare backup!

---

## 📊 Statistiche

Nella sidebar trovi:
- **Total Prompts**: Numero totale di prompt salvati
- **Filtered**: Prompt visibili con i filtri attuali
- **Favorites**: Prompt segnati come preferiti

---

## 🎨 Interfaccia CLI

L'applicazione usa un'interfaccia in stile terminale:
- Font monospace (JetBrains Mono)
- Tema scuro con accenti colorati
- Angoli vivi (no bordi arrotondati)
- Navigazione da tastiera (in sviluppo)

---

## 🔧 Struttura dati

Ogni prompt ha questa struttura:

```typescript
{
  id: "unique-id",                    // ID automatico
  title: "Titolo del prompt",         // Titolo (obbligatorio)
  content: "Contenuto...",            // Testo del prompt (obbligatorio)
  category: "Work",                   // Categoria (default: "General")
  tags: ["python", "automation"],     // Lista di tag
  createdAt: "2026-07-30T...",       // Data creazione
  updatedAt: "2026-07-30T...",       // Data ultima modifica
  favorite: false                     // Preferito
}
```

---

## 📱 Browser Supportati

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Nota**: Non supportato su browser che bloccano localStorage.

---

## 🛠️ Comandi Rapidi

| Azione | UI | Scorciatoia |
|--------|-----|-------------|
| Nuovo prompt | Bottone "+ NEW PROMPT" | - |
| Cerca | Input di ricerca | - |
| Filtra per categoria | Sidebar | - |
| Copia prompt | Icona 📋 | - |
| Modifica prompt | Icona ✏️ | - |
| Segna preferito | Icona ⭐ | - |
| Elimina prompt | Icona 🗑️ | - |
| Esporta | Bottone "EXPORT" | - |
| Importa | Bottone "IMPORT" | - |

---

## 🔐 Privacy e Sicurezza

- **Tutti i dati rimangono nel tuo browser**
- Nessun dato viene inviato a server esterni
- Nessuna connessione internet richiesta
- Nessuna creazione account necessaria

---

## 💡 Best Practices

### Organizzazione

1. **Categorie**: Usa categorie coerenti (lavoro, personale, codice, scrittura)
2. **Tag**: Aggiungi tag specifici per ritrovare facilmente i prompt
3. **Titoli**: Usa titoli descrittivi e concisi
4. **Preferiti**: Marca i prompt che usi spesso

### Backup

1. **Esporta regolarmente** i tuoi dati (almeno una volta al mese)
2. **Salva il file JSON** in un luogo sicuro (cloud, hard drive esterno)
3. **Importa i dati** quando cambi dispositivo o browser

---

## 🆘 Risoluzione Problemi

### I dati non si salvano
- Verifica che il browser permetta localStorage
- Controlla di non essere in modalità incognito
- Prova a pulire la cache e ricaricare

### L'import fallisce
- Verifica che il file sia JSON valido
- Assicurati che il contenuto sia un array di prompt
- Controlla la console del browser per errori dettagliati

### La ricerca non trova risultati
- Controlla di non avere filtri attivi
- Prova termini di ricerca più generici
- Verifica l'ortografia

---

## 📄 Formato Export/Import

Ecco un esempio di file JSON esportato:

```json
[
  {
    "id": "1234567890-abc",
    "title": "Code Review Assistant",
    "content": "Review this code for bugs, performance issues, and best practices...",
    "category": "Work",
    "tags": ["code", "review", "python"],
    "createdAt": "2026-07-30T10:00:00.000Z",
    "updatedAt": "2026-07-30T10:00:00.000Z",
    "favorite": true
  }
]
```

---

## 🎓 Esempi d'Uso

### Prompt per Code Review
```
Title: Code Review Assistant
Category: Work
Tags: code, review, python, best-practices
Content: Review the following code for bugs, performance issues, 
         security vulnerabilities, and adherence to best practices. 
         Suggest improvements where applicable.
```

### Prompt per Writing
```
Title: Blog Post Outline
Category: Writing
Tags: blog, writing, content, planning
Content: Create a detailed outline for a blog post about [topic]. 
         Include introduction, main sections with key points, 
         conclusion, and call-to-action.
```

### Prompt per Email
```
Title: Professional Email Response
Category: Personal
Tags: email, communication, professional
Content: Draft a professional email response to [situation]. 
         Keep it concise, polite, and action-oriented.
```

---

## 🔄 Aggiornamenti Futuri

- [ ] Scorciatoie da tastiera
- [ ] Esportazione in altri formati (MD, TXT)
- [ ] Storia delle modifiche
- [ ] Prompt templates
- [ ] Ricerca avanzata con operatori booleani
- [ ] Sync tra dispositivi (opzionale)

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: 2026-07-30  
**Stato**: ✅ Funzionale

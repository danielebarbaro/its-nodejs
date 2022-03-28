## Comandi base prompt Windows

Questo doc aggiunge qualche informazione in più al già completo ed esaustivo [Prontuario Comandi Linux](Prontuario_Comandi_Linux.pdf) di open@polito

### Unix: `pwd` - Windows: `cd`:
*Unix/Windows*: serve per mostrare la directory in cui ci si trova.

### Unix: `ls` - Windows: `cd`:
In *Unix*: serve per listare il contenuto di una directory.
In *Windows*: serve per mostrare la directory in cui ci si trova.

### Unix: `cd` - Windows: `cd`:
In *Windows*: serve per mostrare la directory in cui ci si trova.
In *Unix*: serve per spostarsi all'interno delle directory del filesystem.  

La sintassi del comando è la seguente:
Esempio:
 - `cd ..`    | Serve per spostarsi alla directory superiore.
 - `cd`       | Serve per spostarsi alla home directory.
 - `cd /foo`  | Serve per spostarti nella cartella /foo
 
### Unix: `mkdir` - Windows: `mkdir`:
In *Unix/Windows*: serve per creare directory.

### Unix: `cp` - Windows: `copy`:
In *Unix/Windows*: serve per copiare un file in un altro file o directory.

### Unix: `mv` - Windows: `move`:
In *Unix/Windows*: serve per spostare, o rinominare, file e directory.

### Unix: `rm` - Windows: `del`:
In *Unix/Windows*: serve per cancellare file o directory dal file.
In *Windows*: serve per cancellare file. Per cancellare una directory bisogna usare `rmdir`

### Unix: `ln` - Windows: `assign`:
In *Unix/Windows*: serve a creare un collegamento  (link) ad un file o una directory.

### Unix: `cat` - Windows: `type`:
In *Unix/Windows*: serve per mostrare il contenuto del file specificato.

### Unix: `chmod` - Windows: `assign`:
In *Unix/Windows*: serve per modificare i permessi di un file e/o directory.


#### Fonti:

Riferimento doc ufficiale Windows:
- [Alias per la compatibilità](https://docs.microsoft.com/it-it/powershell/scripting/learn/compatibility-aliases?view=powershell-7.2)

Helper comandi:
- [Windows Command Prompt](https://skimfeed.com/blog/windows-command-prompt-ls-equivalent-dir/)
import { TRANSLATION_KEYS } from "constants/translation";

const translations = {
    ENG: {
        [TRANSLATION_KEYS.NOTIFICATION]: "Notification",
        [TRANSLATION_KEYS.ICONS_VIEW]: "View",
        [TRANSLATION_KEYS.CREATE]: "Create",
        [TRANSLATION_KEYS.SMALL_ICONS]: "Small icons",
        [TRANSLATION_KEYS.MEDIUM_ICONS]: "Medium icons",
        [TRANSLATION_KEYS.BIG_ICONS]: "Large icons",
        [TRANSLATION_KEYS.FOLDER]: "Folder",
        [TRANSLATION_KEYS.TEXT_DOCUMENT]: "Text Document",
        [TRANSLATION_KEYS.NEW_FOLDER]: "New folder",
        [TRANSLATION_KEYS.NEW_TEXT_DOCUMENT]: "New text document",
        [TRANSLATION_KEYS.FULL_SCREEN_ADVICE]:
            "For better experience, use full screen mode. To switch normal <--> full screen mode, use F11 button.",
        [TRANSLATION_KEYS.CHANGED]: "changed",
        [TRANSLATION_KEYS.SAVED]: "Saved",
        [TRANSLATION_KEYS.UNSAVE_TITLE]: "Do you want to save your changes?",
        [TRANSLATION_KEYS.UNSAVE_SUBTITLE]: "You have unsaved changes.",
        [TRANSLATION_KEYS.SAVE]: "Save",
        [TRANSLATION_KEYS.UNSAVE]: "Do not store",
        [TRANSLATION_KEYS.CANCEL]: "Cancel",
        [TRANSLATION_KEYS.KEYBOARD_LAYOUT]: "Keyboard layout",
        [TRANSLATION_KEYS.READ_ME]: "",
        [TRANSLATION_KEYS.SHUT_DOWN_TITLE]: "Shutting down...",
        [TRANSLATION_KEYS.RESTART_TITLE]: "Restarting...",
        [TRANSLATION_KEYS.CHANGE_NAME]: "Change name",
        [TRANSLATION_KEYS.DELETE]: "Delete",
        [TRANSLATION_KEYS.PINNED]: "Pinned",
        [TRANSLATION_KEYS.NEW_TAB]: "New Tab",
        [TRANSLATION_KEYS.SETTINGS]: "Settings",
        [TRANSLATION_KEYS.POWER_MODAL.RESTART]: "Restart",
        [TRANSLATION_KEYS.POWER_MODAL.LOCK]: "Lock",
        [TRANSLATION_KEYS.POWER_MODAL.SHUT_DOWN]: "Shut down",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.PERSONALIZATION]: "Personalization",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DESKTOP]: "Desktop",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DISPLAY]: "Display",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM]: "System",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_INFORMATION]: "System information",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_LANGUAGE]: "System language",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.WALLPAPERS]: "Wallpapers",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.BRIGHTNESS]: "Brightness",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.NIGHT_MODE]: "Night mode",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE]: "File",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE]: "Size",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_FILE_COLOR]: "Selection file color",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_SMALL]: "Small",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_MEDIUM]: "Medium",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_LARGE]: "Large",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA]: "Selection area",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_BORDER_COLOR]: "Border color",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_COLOR]: "Area color",
        [TRANSLATION_KEYS.PROPERTIES]: "Properties",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.SIZE]: "Size",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.CREATED_AT]: "Created",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.UPDATED_AT]: "Updated",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.TYPE]: "Type",
        [TRANSLATION_KEYS.BIN]: "Bin",
    },
    UA: {
        [TRANSLATION_KEYS.NOTIFICATION]: "Сповіщення",
        [TRANSLATION_KEYS.ICONS_VIEW]: "Вигляд",
        [TRANSLATION_KEYS.CREATE]: "Створити",
        [TRANSLATION_KEYS.SMALL_ICONS]: "Дрібні піктограми",
        [TRANSLATION_KEYS.MEDIUM_ICONS]: "Середні піктограми",
        [TRANSLATION_KEYS.BIG_ICONS]: "Великі піктограми",
        [TRANSLATION_KEYS.FOLDER]: "Папка",
        [TRANSLATION_KEYS.TEXT_DOCUMENT]: "Текстовий документ",
        [TRANSLATION_KEYS.NEW_FOLDER]: "Нова папка",
        [TRANSLATION_KEYS.NEW_TEXT_DOCUMENT]: "Новий текстовий документ",
        [TRANSLATION_KEYS.FULL_SCREEN_ADVICE]:
            "Для кращого досвіду використовуйте повноекранний режим. Що б перемикатися між режимами, використовуйте кнопку F11.",
        [TRANSLATION_KEYS.CHANGED]: "змінено",
        [TRANSLATION_KEYS.SAVED]: "Збережено",
        [TRANSLATION_KEYS.UNSAVE_TITLE]: "Хочете зберегти зміни?",
        [TRANSLATION_KEYS.UNSAVE_SUBTITLE]: "У вас є незбережені зміни.",
        [TRANSLATION_KEYS.SAVE]: "Зберегти",
        [TRANSLATION_KEYS.UNSAVE]: "Не зберігати",
        [TRANSLATION_KEYS.CANCEL]: "Скасувати",
        [TRANSLATION_KEYS.KEYBOARD_LAYOUT]: "Розкладка клавіатури",
        [TRANSLATION_KEYS.READ_ME]: `                                 ----- Система -----
        
        
1. Робочий стіл.
    1.1 Файл.
        1.1.1 Можливість виділення файла/файлів.
        1.1.2 Можливість відкриття файла через double click або виділивши файл і натиснувши Enter.
        1.1.3 Можливість перетягування файла в/з папки на робочий стіл/іншу папку (як в ярлик, так і у відкрите вікно папки).
        1.1.4 Можливість видалення файла/файлів натиснувши delete попередньо виділивши їх, або через контекстне меню натиснувши праву кнопку миші по файлу. Файли попадуть в кошик.
        1.1.5 Можливість редагування текстового файлу. При закритті відредагованого, не збереженого файла з'явиться повідомлення.
        1.1.6 Можливість збереження відредагованого файла натиснувши Ctrl + S.
        1.1.7 Тип файла.
            1.1.7.1 Текстовий документ. Відкривається у вікні.
            1.1.7.2 Папка. Відкривається у вікні.
            1.1.7.3 PDF. Відкривається у вікні.
            1.1.7.4 Посилання. Відкриває посиляння у новому вікні браузера.
            
    1.2 Контекстне меню.
        1.2.1 Можливість відкрити меню натиснувши праву кнопку миші по робочому столу.
            1.2.1.1 Можливість змінити розміри ярликів на робочому столі.
            1.2.1.2 Можливість створити новий текстовий документ або папку.
        1.2.2 Можливість відкрити меню натиснувши праву кнопку миші по файлу.
            1.2.2.1 Можливість змінити ім'я файлу.
            1.2.2.2 Можливість видалити файл.
            1.2.2.3 Можливість відкрити властивості файла.
            
    1.3 Вікна.
        1.3.1 Можливість перетягування вікна по робочому столі затиснувши ліву кнопку миші на хедері вікна.
        1.3.2 Можливість розгорнути вікно на весь екран натиснувши відповідну кнопку в хедері вікна або double click по хедеру.
            1.3.1 Після виходу з повноекранного режиму вікно повернеться до тих самих розмірів і позиції на робочому столі, які були до повноекранного режиму.
        1.3.2 Можливість змінити розмір вікна, потягнувши за праву або нижню межу вікна, чи за правий нижній кут.
        1.3.3 Під час кліку на вікно воно автоматично стає активним і відображається поверх інших відкритих вікон.
        
    1.4 Кошик.
        1.4.1 Можливість відновити видалені файли. Файли повернуться до папок, у яких вони перебували до видалення. Якщо таких папок уже не існує - файл буде відновлено на робочий стіл.
        1.4.2 Можливість видалити файли назавжди.
        
    1.5 Налаштування.
        1.5.1 Персоналізація.
            1.5.1.1 Можливість змінити шпалери.
            1.5.1.2 Можливість змінити колір виділення, розмір файла.
            1.5.1.3 Можливість змінити колір області виділення.
        1.5.2 Система.
            1.5.2.1 Можливість змінити яскравість.
            1.5.2.2 Можливість ввімкнути нічний режим.
            1.5.2.3 Можливість змінити мову системи.
            1.5.2.4 Можливість переглянути інформацію системи.
            
    1.6 Google Chrome
        1.6.1 Можливість додати нову вкладку (максимум 5 штук).
        1.6.2 Можливість закрити активні вкладки.
        
2. Панель задач.
    2.1 Можливість відкрити детальніший прогноз погоди.
    2.2 Можливість відкрити Google Chrome.
    2.3 Можливіть відкрити налаштування.
    2.4 Можливість перезавантажити, вимкнути чи заблокувати систему.
    
3. Технічна інформація.
    3.1 Умови оновлення поля updated_at у файла.
        3.1.1 При редагуванні + збереженні текстового документа.
        3.1.2 При переміщенні в папку інших файлів.
        3.1.3 При зміні імені файла.
    3.2 Поле size у файла вираховується на основі внутрішнього контента файла.
    3.3 Не можливо перетягнути файл в текстовий документ, лише в папку або на робочий стіл.
    3.4 Не можливо перетягнути файл сам в себе.
`,
        [TRANSLATION_KEYS.RESTART_TITLE]: "Перезавантаження...",
        [TRANSLATION_KEYS.SHUT_DOWN_TITLE]: "Вихід з системи...",
        [TRANSLATION_KEYS.CHANGE_NAME]: "Змінити ім'я",
        [TRANSLATION_KEYS.DELETE]: "Видалити",
        [TRANSLATION_KEYS.PINNED]: "Закріплено",
        [TRANSLATION_KEYS.NEW_TAB]: "Нове вікно",
        [TRANSLATION_KEYS.SETTINGS]: "Налаштування",
        [TRANSLATION_KEYS.POWER_MODAL.RESTART]: "Перезавантажити",
        [TRANSLATION_KEYS.POWER_MODAL.LOCK]: "Вийти",
        [TRANSLATION_KEYS.POWER_MODAL.SHUT_DOWN]: "Вимкнути",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.PERSONALIZATION]: "Персоналізація",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DESKTOP]: "Робочий стіл",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DISPLAY]: "Дисплей",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM]: "Система",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_INFORMATION]: "Системна інформація",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_LANGUAGE]: "Мова системи",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.WALLPAPERS]: "Шпалери",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.BRIGHTNESS]: "Яскравість",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.NIGHT_MODE]: "Нічний режим",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE]: "Файл",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE]: "Розмір",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_FILE_COLOR]: "Колір виділення файла",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_SMALL]: "Малий",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_MEDIUM]: "Середній",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_LARGE]: "Великий",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA]: "Область виділення",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_BORDER_COLOR]: "Колір рамки",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_COLOR]: "Колір виділення",
        [TRANSLATION_KEYS.PROPERTIES]: "Властивості",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.SIZE]: "Розмір",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.CREATED_AT]: "Створено",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.UPDATED_AT]: "Оновлено",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.TYPE]: "Тип",
        [TRANSLATION_KEYS.BIN]: "Кошик",
    },
    PL: {
        [TRANSLATION_KEYS.NOTIFICATION]: "Powiadomienie",
        [TRANSLATION_KEYS.ICONS_VIEW]: "Wygląd",
        [TRANSLATION_KEYS.CREATE]: "Stworzyć",
        [TRANSLATION_KEYS.SMALL_ICONS]: "Małe ikony",
        [TRANSLATION_KEYS.MEDIUM_ICONS]: "Średnie ikony",
        [TRANSLATION_KEYS.BIG_ICONS]: "Duże ikony",
        [TRANSLATION_KEYS.FOLDER]: "Teczka",
        [TRANSLATION_KEYS.TEXT_DOCUMENT]: "Dokument tekstowy",
        [TRANSLATION_KEYS.NEW_FOLDER]: "Nowy teczka",
        [TRANSLATION_KEYS.NEW_TEXT_DOCUMENT]: "Nowy dokument tekstowy",
        [TRANSLATION_KEYS.FULL_SCREEN_ADVICE]:
            "Aby uzyskać lepsze wrażenia, użyj trybu pełnoekranowego. Aby przełączyć tryb normalny <--> pełnoekranowy, użyj przycisku F11.",
        [TRANSLATION_KEYS.CHANGED]: "zmieniony",
        [TRANSLATION_KEYS.SAVED]: "Zapisane",
        [TRANSLATION_KEYS.UNSAVE_TITLE]: "Czy chcesz zapisać zmiany?",
        [TRANSLATION_KEYS.UNSAVE_SUBTITLE]: "Masz niezapisane zmiany.",
        [TRANSLATION_KEYS.SAVE]: "Ratować",
        [TRANSLATION_KEYS.UNSAVE]: "Nie przechowywać",
        [TRANSLATION_KEYS.CANCEL]: "Anulować",
        [TRANSLATION_KEYS.KEYBOARD_LAYOUT]: "Układ klawiatury",
        [TRANSLATION_KEYS.READ_ME]: "",
        [TRANSLATION_KEYS.SHUT_DOWN_TITLE]: "Wyłączanie...",
        [TRANSLATION_KEYS.RESTART_TITLE]: "Uruchom ponownie...",
        [TRANSLATION_KEYS.CHANGE_NAME]: "Zmienić nazwę",
        [TRANSLATION_KEYS.DELETE]: "Usuwać",
        [TRANSLATION_KEYS.PINNED]: "Przypięte",
        [TRANSLATION_KEYS.NEW_TAB]: "Nowa zakładka",
        [TRANSLATION_KEYS.SETTINGS]: "Ustawienia",
        [TRANSLATION_KEYS.POWER_MODAL.RESTART]: "Uruchom ponownie",
        [TRANSLATION_KEYS.POWER_MODAL.LOCK]: "Zablokuj",
        [TRANSLATION_KEYS.POWER_MODAL.SHUT_DOWN]: "Zamknij",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.PERSONALIZATION]: "Personalizacja",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DESKTOP]: "Pulpit",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.DISPLAY]: "Wyświetlacz",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM]: "System",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_INFORMATION]: "Informacje o systemie",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_LANGUAGE]: "Język systemu",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.WALLPAPERS]: "Tapety",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.BRIGHTNESS]: "Jasność",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.NIGHT_MODE]: "Tryb nocny",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE]: "Plik",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE]: "Rozmiar",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_FILE_COLOR]: "Kolor pliku wyboru",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_SMALL]: "Mały",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_MEDIUM]: "Średni",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE_LARGE]: "Duży",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA]: "Obszar selekcji",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_BORDER_COLOR]: "Kolor obramowania",
        [TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_COLOR]: "Kolor obszaru",
        [TRANSLATION_KEYS.PROPERTIES]: "Właściwości",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.SIZE]: "Rozmiar",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.CREATED_AT]: "Stworzony",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.UPDATED_AT]: "Zaktualizowano",
        [TRANSLATION_KEYS.PROPERTIES_WINDOW.TYPE]: "Typ",
        [TRANSLATION_KEYS.BIN]: "Kosz",
    },
};

export default translations;

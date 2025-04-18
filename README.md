# 🎵 Sound Player App (Angular 15)

Одностраничное Angular-приложение, отображающее список MP3-записей в виде таблицы (Material Table). При выборе строки под таблицей появляется плеер для прослушивания выбранного звука.

## 🛠 Технологии

- Angular 15
- Angular Material (`mat-table`, `mat-card`)
- SCSS
- HTML5 `<audio>`

## 📸 Скриншот

![screenshot](./screenshot.png)

## 🔧 Функциональность

- Отображение таблицы с колонками:
  - ID
  - Название звука
  - Имя файла
- Клик по строке активирует плеер под таблицей
- Плеер воспроизводит `.mp3` файл из публичного источника
- Подсветка выбранной строки (дополнительно)
- Поддержка адаптивности (дополнительно)

## ▶️ Запуск локально

```bash
git clone https://github.com/your-username/sound-player-angular15.git
cd sound-player-angular15
npm install
ng serve

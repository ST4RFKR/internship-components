'use client';
import React from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select/select';
import { EnglishFlag, RussianFlag } from '@/app/assets/icon/components';

const LanguageSelect = () => {
  const [language, setLanguage] = React.useState('en');

  return (
    <div className="w-[210px] ml-10">
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger
          label="Select Language"
          icon={language === 'en' ? <EnglishFlag /> : <RussianFlag />}>
          <SelectValue>{language === 'en' ? 'English' : 'Русский'}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en" icon={<EnglishFlag />}>
            English
          </SelectItem>
          <SelectItem value="ru" icon={<RussianFlag />}>
            Русский
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;

/*** Добавлено или изменено в оригинальном компоненте: ***/
// 1. Добавлено использование `value` и `onValueChange` в корневом компоненте Select для управления состоянием.
// 2. Добавлен элемент `<SelectValue>` внутри `<SelectTrigger>` для отображения текущего значения.
// 3. В компоненте SelectTrigger добавлено свойство `label` для передачи текста метки.
// 4. Добавлены иконки (<RussianFlag />, <EnglishFlag />) к элементам `<SelectItem>` для визуализации выбора.
// 5. Обернули пример в контейнер с фиксированной шириной для лучшей демонстрации (класс `w-64`).

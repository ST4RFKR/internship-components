import LanguageSelect from './components/LanguageSelect/LanguageSelect';
import { Input } from './components/ui/input/input';

export default function Home() {
  return (
    <>
      <LanguageSelect />
      <Input label="Input" placeholder="Test" />
    </>
  );
}

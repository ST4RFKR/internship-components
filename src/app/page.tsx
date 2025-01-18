import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select/select';

export default function Home() {
  return (
    <>
      <Select disabled>
        <SelectTrigger className="w-[210px] ml-10" label={'Select-box'}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="Select-box">Select-box</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

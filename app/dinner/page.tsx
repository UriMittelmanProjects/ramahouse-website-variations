import { permanentRedirect } from 'next/navigation';

export default function LegacyDinnerPage() {
  permanentRedirect('/menu?service=dinner');
}

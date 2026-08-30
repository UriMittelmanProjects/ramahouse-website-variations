import { permanentRedirect } from 'next/navigation';

export default function LegacyLunchMenuPage() {
  permanentRedirect('/menu?service=lunch');
}

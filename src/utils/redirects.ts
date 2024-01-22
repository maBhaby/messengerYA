import { navigate } from '@/services/navigate';

export const handleRedirectToChat = (e: Event) => {
  e.preventDefault();
  navigate('chat');
};

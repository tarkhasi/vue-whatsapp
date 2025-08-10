import {url} from "@/tools/utils.ts";

const chats: any = [
  {
    id: '1',
    name: 'Me (You)',
    last_message: {
      user_created: 'current_user',
      type: 'text',
      text: 'رزومه‌ بنده با بیش از ۱۰ سال سابقه حرفه ای خدمت تون ارسال شد.',
      status: 'seen',
    },
    sent_at: '12:36',
    image: url('avatars/me.JPG'),
    pined: true,
    active: true,
    label: null,
  },
  {
    id: '2',
    name: 'Mr Ramezan Por',
    last_message: {
      user_created: null,
      type: 'text',
      text: 'چه زمانی می تونید صحبت کنید مهندس؟',
      status: 'new',
    },
    new_messages_count: 1,
    sent_at: '12:36',
    image: url('avatars/men-1.webp'),
    pined: false,
    label: {
      color: 'green',
      multi: false,
    },
  },
  {
    id: '3',
    name: 'Salman',
    last_message: {
      user_created: null,
      type: 'text',
      text: 'حله رقیق',
      status: 'new',
    },
    sent_at: '12:36',
    image: url('avatars/men-2.jfif'),
    pined: false,
    label: {
      color: '',
      multi: false,
    },
  },
  {
    id: '4',
    name: 'Mom',
    last_message: {
      user_created: null,
      type: 'text',
      text: 'You reacted ♥ to : "باشه عزیزم"',
      status: 'seen',
    },
    sent_at: '9:36',
    image: null,
    pined: false,
    label: {
      color: '',
      multi: false,
    },
  },
  {
    id: '5',
    name: '+98 999 000 2222',
    last_message: {
      user_created: 'current_user',
      type: 'text',
      text: 'خارج از بحث استخدام، خوشحال میشم بتونم اگه سوال یا توضیحی راجب نحوه کاهش هزینه و صرفه جویی زمانی داشتین پاسخ بدم و راهنماییتون کنم در این زمینه، در حد دانشم در خدمتم',
      status: 'waiting_delivery',
    },
    sent_at: '8:32',
    image: null,
    pined: false,
    label: {
      color: 'purple',
      multi: false,
    },
  },
  {
    id: '6',
    name: '+98 999 000 3333',
    last_message: {
      user_created: null,
      type: 'text',
      text: 'This message was deleted',
      status: 'deleted',
    },
    sent_at: '8:32',
    image: null,
    pined: false,
    label: {
      color: '',
      multi: false,
    },
  }
]


export default chats;

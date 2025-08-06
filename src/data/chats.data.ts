const chats:any = [
  {
    id: '1',
    name: 'Me (You)',
    last_message: {
      type: 'text',
      text: 'چه زمانی می تونید صحبت کنید؟',
      seen: true,
    },
    sent_at: '12:36',
    image: '/avatars/me.JPG',
    pined: true,
    active: true,
    label: null,
  },
  {
    id: '2',
    name: 'Mr Ghezeli',
    last_message: {
      type: 'text',
      text: 'چه زمانی می تونید صحبت کنید؟',
      seen: true,
    },
    sent_at: '12:36',
    image: '/avatars/me.JPG',
    pined: false,
    label: {
      color: 'green',
      multi: false,
    },
  }
]


export default chats;

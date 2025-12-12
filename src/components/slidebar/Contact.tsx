import { Calendar, Github, Mail, MapPin, Mars, Phone } from "lucide-react";
import { ReactNode } from "react";

interface Contact {
  icon: ReactNode;
  content: ReactNode;
}

const contacts: Contact[] = [
  {
    icon: <Calendar size={20} strokeWidth={1} />,
    content: <p>28-05-2004</p>,
  },
  {
    icon: <Mars size={20} strokeWidth={1} />,
    content: <p>Nam</p>,
  },
  {
    icon: <MapPin size={20} strokeWidth={1} />,
    content: <p>Trần Hoàng Na, Hưng Lợi, Ninh Kiều, Cần Thơ</p>,
  },
  {
    icon: <Phone size={20} strokeWidth={1} />,
    content: <p>0848041482</p>,
  },
  // {
  //   icon: <Mail size={20} strokeWidth={1} />,
  //   content: (
  //     <a href="mailto: trikhaikhmt@gmail.com">
  //       khaib2207530@student.ctu.edu.vn
  //     </a>
  //   ),
  // },
  {
    icon: <Mail size={20} strokeWidth={1} />,
    content: <a href="mailto: trikhaikhmt@gmail.com">trikhaikhmt@gmail.com</a>,
  },
  {
    icon: <Github size={20} strokeWidth={1} />,
    content: (
      <a href="https://github.com/TriKhai">https://github.com/TriKhai</a>
    ),
  },
];

export default function Contact() {
  return (
    <div className="mb-4 w-full text-white">
      {contacts.map((contact, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <div>{contact.icon}</div>
          <div>{contact.content}</div>
        </div>
      ))}
    </div>
  );
}

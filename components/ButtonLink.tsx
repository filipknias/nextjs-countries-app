import { FC } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  children: JSX.Element;
}

const ButtonLink: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="bg-white dark:bg-gray-700 shadow-md rounded-md py-3 px-6 self-start font-medium dark:text-white flex items-center gap-3">
        {children}
      </button>
    </Link>
  )
}

export default ButtonLink;
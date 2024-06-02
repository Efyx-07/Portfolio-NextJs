"use client"

import Button from '../Reusables/Button';
import SiteName from './SiteName';
import useContacts from '@/app/hooks/useContacts';
import { Contact } from '@/app/types';
import './Header.scss';

export default function Header() {

    const contacts: Contact[] = useContacts();

    return (
        <header>
            <div className="content">
                <SiteName />
                <div className="button-container">
                    {contacts.map((contact, index) => (
                        index === 2 && 
                        <Button 
                            key={contact.name}
                            name={contact.name}
                            icon={contact.icon}
                            link={contact.link}
                            target=""
                            rel=""
                            className='button'
                        /> 
                    ))}
                </div>
            </div>
        </header>
    )
}
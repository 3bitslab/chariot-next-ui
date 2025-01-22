import { Github, Linkedin, MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Developer({
    developer,
}: {
    developer: {
        name: string;
        description: string;
        imageSrc: string;
        github: string;
        linkedIn: string;
        email: string;
    };
}) {
    const { name, description, imageSrc, github, linkedIn, email } = developer;

    const t = useTranslations();

    return (
        <div className="flex flex-col gap-y-2 items-center justify-center bg-primary-100 text-primary-850 rounded-lg px-8 py-5 text-center">
            <Image
                src={imageSrc}
                height={100}
                width={100}
                alt={name}
                draggable="false"
                className="rounded-full"
            />
            <span className="font-bold text-xl">{name}</span>
            <span>{t(description)}</span>
            <div className="flex gap-x-3">
                <a href={linkedIn} target="_blank">
                    <Linkedin />
                </a>
                <a href={github} target="_blank">
                    <Github />
                </a>
                <a href={`mailto: ${email}`}>
                    <MailIcon />
                </a>
            </div>
        </div>
    );
}

export default Developer;

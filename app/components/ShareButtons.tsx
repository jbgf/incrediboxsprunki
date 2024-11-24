'use client';
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

interface ShareButtonsProps {
  url?: string;
  title: string;
}

export default function ShareButtons({ url = typeof window !== 'undefined' ? window.location.href : '', title }: ShareButtonsProps) {
  const iconSize = 32;
  const buttonClass = "hover:scale-110 transition-transform duration-200 mx-1";

  return (
    <div className="flex items-center space-x-2">
      <FacebookShareButton url={url} /* quote={title} */ className={buttonClass}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} className={buttonClass}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} className={buttonClass}>
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>

      <TelegramShareButton url={url} title={title} className={buttonClass}>
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>

      <WhatsappShareButton url={url} title={title} className={buttonClass}>
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
    </div>
  );
}

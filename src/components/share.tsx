import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton,
} from 'react-share'

type Props = {
  text: string
  url: string
}

export default ({ text, url }: Props) => {
  return (
    <>
      <TwitterShareButton url={url} title={`Bosako Lab|${text}|@oshinbosako`}>
        この記事をTwitterでシェア
      </TwitterShareButton> 
    </>
  )
}

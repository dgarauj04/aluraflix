import { BannerStyle, BackgroundImage, TextContainerStyle, VideoContainerStyle } from './style'

export function Banner() {
    return (
        <BannerStyle>
          <BackgroundImage />
          <div>
            <TextContainerStyle>
              <h1>Bem-Vindo ao Aluraflix!</h1>
              <h3>Seu portal para adicionar vídeos favoritos tanto educativos sobre tecnologia e programação, quanto para entretenimento.</h3>
            </TextContainerStyle>
            <VideoContainerStyle>
              <iframe
                src="https://www.youtube.com/embed/L4C2tF4YzFU"
                title="What Do You Believe In? | #ACREDITE EM SI MESMO, QUE VOCÊ VAI LONGE!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              >
              </iframe>
            </VideoContainerStyle>
          </div>
        </BannerStyle>
    )
  }
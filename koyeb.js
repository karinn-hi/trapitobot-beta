FROM fedora:37

RUN sudo dnf -y update &&\
sudo dnf install -y 
sudo dnf install -y git ffmpeg ImageMagick nodejs yarnpkg libwebp &&\
sudo dnf clean all -y

RUN git clone 

WORKDIR /root/M

COPY ./root/M

RUN yarn install

CMD ["node", "index.js"]
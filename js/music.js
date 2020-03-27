const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini:true,
    autoplay: false,
    audio: [
      {
        name: "只为找到你",
        artist: '盛哲',
        url: 'http://music.163.com/song/media/outer/url?id=526093051.mp3',
        cover: 'http://p1.music.126.net/bojEElWG5ObuM6VFq3noPQ==/109951163093222884.jpg',
      },
      {
        name: "Señorita",
        artist: 'Madilyn Bailey',
        url: 'http://music.163.com/song/media/outer/url?id=1382340352.mp3',
        cover: 'http://p2.music.126.net/Vvp76dd-A_-az31xabT7_Q==/109951164268549427.jpg',
      },
    ],
});
document.getElementById('aplayer').setAttribute('style', 'position: fixed;left: 1rem;bottom: 2rem;z-index: 99999;')


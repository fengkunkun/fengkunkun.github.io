const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini:true,
    autoplay: true,
    audio: [
      {
        name: "少年",
        artist: '梦然',
        url: 'https://sharefs.yun.kugou.com/202003251419/acf277ebfbd2f8bcbe395fed793cd323/G170/M07/16/11/SocBAF3H3aqAUYOEADmpdloW3bU827.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20191110/20191110174405582448.jpg',
      },
      {
        name: "只为找到你",
        artist: '盛哲',
        url: 'http://m10.music.126.net/20200325162722/5a302406cc8b76d6548b7b8b917f7cee/ymusic/23d6/375b/eb4b/113cfede7562d10c504416f647f68f96.mp3',
        cover: 'http://p1.music.126.net/bojEElWG5ObuM6VFq3noPQ==/109951163093222884.jpg',
      }
    ],
});
document.getElementById('aplayer').setAttribute('style', 'position: fixed;left: 50px;bottom: 80px;z-index: 99999;')


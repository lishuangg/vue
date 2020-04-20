//  解析歌词
export function parLyc(lrc) {
  var lyrics = lrc.split("\n");
      var obj = {};
      for(var i=0;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);//对 encodeURIComponent() 函数编码的 URI 进行解码
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if(!timeRegExpArr)continue;
          var clause = lyric.replace(timeReg,'&#8197;');
          for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
              var t = timeRegExpArr[k];
              var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                  sec = Number(String(t.match(/\:\d*/i)).slice(1));
              var time = min * 60 + sec;
              obj[time] = clause;
          }
      }
  return obj;
}
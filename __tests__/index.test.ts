import {toHalfWidth, toFullWidth} from '../src';

describe('toHalfWidth', () => {
  it('数字', () => {
    expect(toHalfWidth('０１２３４５６７８９')).toBe('0123456789');
  });
  it('アルファベット', () => {
    expect(toHalfWidth('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ')).toBe('abcdefghijklmnopqrstuvwxyz');
    expect(toHalfWidth('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  it('カタカナ', () => {
    expect(toHalfWidth('アイウエオ')).toBe('ｱｲｳｴｵ');
    expect(toHalfWidth('カキクケコ')).toBe('ｶｷｸｹｺ');
    expect(toHalfWidth('サシスセソ')).toBe('ｻｼｽｾｿ');
    expect(toHalfWidth('タチツテト')).toBe('ﾀﾁﾂﾃﾄ');
    expect(toHalfWidth('ナニヌネノ')).toBe('ﾅﾆﾇﾈﾉ');
    expect(toHalfWidth('ハヒフヘホ')).toBe('ﾊﾋﾌﾍﾎ');
    expect(toHalfWidth('マミムメモ')).toBe('ﾏﾐﾑﾒﾓ');
    expect(toHalfWidth('ヤユヨ')).toBe('ﾔﾕﾖ');
    expect(toHalfWidth('ラリルレロ')).toBe('ﾗﾘﾙﾚﾛ');
    expect(toHalfWidth('ワヲン')).toBe('ﾜｦﾝ');
    expect(toHalfWidth('ァィゥェォッャュョ')).toBe('ｧｨｩｪｫｯｬｭｮ');
    expect(toHalfWidth('ガギグゲゴ')).toBe('ｶﾞｷﾞｸﾞｹﾞｺﾞ');
    expect(toHalfWidth('ザジズゼゾ')).toBe('ｻﾞｼﾞｽﾞｾﾞｿﾞ');
    expect(toHalfWidth('ダヂヅデド')).toBe('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ');
    expect(toHalfWidth('バビブベボ')).toBe('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ');
    expect(toHalfWidth('パピプペポ')).toBe('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ');
    expect(toHalfWidth('ヴ')).toBe('ｳﾞ');
    expect(toHalfWidth('ー')).toBe('ｰ');
    expect(toHalfWidth('・')).toBe('･');
    expect(toHalfWidth('。')).toBe('｡');
    expect(toHalfWidth('、')).toBe('､');
    expect(toHalfWidth('「')).toBe('｢');
    expect(toHalfWidth('」')).toBe('｣');
  });
});

describe('toFullWidth', () => {
  it('数字', () => {
    expect(toFullWidth('0123456789')).toBe('０１２３４５６７８９');
  });
  it('アルファベット', () => {
    expect(toFullWidth('abcdefghijklmnopqrstuvwxyz')).toBe('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ');
    expect(toFullWidth('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ');
  });
  it('カタカナ', () => {
    expect(toFullWidth('ｱｲｳｴｵ')).toBe('アイウエオ');
    expect(toFullWidth('ｶｷｸｹｺ')).toBe('カキクケコ');
    expect(toFullWidth('ｻｼｽｾｿ')).toBe('サシスセソ');
    expect(toFullWidth('ﾀﾁﾂﾃﾄ')).toBe('タチツテト');
    expect(toFullWidth('ﾅﾆﾇﾈﾉ')).toBe('ナニヌネノ');
    expect(toFullWidth('ﾊﾋﾌﾍﾎ')).toBe('ハヒフヘホ');
    expect(toFullWidth('ﾏﾐﾑﾒﾓ')).toBe('マミムメモ');
    expect(toFullWidth('ﾔﾕﾖ')).toBe('ヤユヨ');
    expect(toFullWidth('ﾗﾘﾙﾚﾛ')).toBe('ラリルレロ');
    expect(toFullWidth('ﾜｦﾝ')).toBe('ワヲン');
    expect(toFullWidth('ｧｨｩｪｫｯｬｭｮ')).toBe('ァィゥェォッャュョ');
    expect(toFullWidth('ｶﾞｷﾞｸﾞｹﾞｺﾞ')).toBe('ガギグゲゴ');
    expect(toFullWidth('ｻﾞｼﾞｽﾞｾﾞｿﾞ')).toBe('ザジズゼゾ');
    expect(toFullWidth('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')).toBe('ダヂヅデド');
    expect(toFullWidth('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')).toBe('バビブベボ');
    expect(toFullWidth('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')).toBe('パピプペポ');
    expect(toFullWidth('ｳﾞ')).toBe('ヴ');
    expect(toFullWidth('ｰ')).toBe('ー');
    expect(toFullWidth('･')).toBe('・');
    expect(toFullWidth('｡')).toBe('。');
    expect(toFullWidth('､')).toBe('、');
    expect(toFullWidth('｢')).toBe('「');
    expect(toFullWidth('｣')).toBe('」');
  });
});

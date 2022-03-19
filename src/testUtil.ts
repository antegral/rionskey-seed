import rionsKeyEncLib from '../index';

export default class testUtil extends rionsKeyEncLib {
  testRoundKey() {
    console.log('## RoundKey Test ##');
    let predict = [
      -1689591122, -1750753092, 418889342, 991237360, -846778740, 842528409, -428923159, 352422339,
      1940449590, 1070887467, 1004668950, 2034171472, -485673510, -1477429856, -1594143951,
      1159822026, 237488068, 531816416, -2085814217, 875975246, 201271508, -932917648, 1787653901,
      -2119295699, -354774956, 1531333860, -516044213, 1381968384, 2092978520, 139076389,
      1391022017, 220854246,
    ];
    let result = this.makeRoundKey([13, 2, 10, 3, 4, 5, 7, 2, 2, 14, 10, 14, 12, 0, 0, 2]);

    for (let i = 0; i < predict.length; i++) {
      if (predict[i] !== result[i])
        console.log(`[${i}] RoundKey Test Failed!! ${predict[i]} != ${result[i]}`);
    }
    console.log('RoundKey Test Complated.');
  }

  testEcbEncrypt() {
    console.log('## SEED-128-ECB Test ##');
    let predict = [73, 141, 135, 206, 205, 216, 25, 163, 164, 225, 27, 85, 254, 205, 227, 244];
    let result = this.ecbEncrypt(
      [76, 105, 103, 73, 110, 98, 116, 117, 5, 13, 123, 78, 4, 124, 51, 51],
      [
        -1768793763, 447213224, -497056820, 1092296317, -1849243749, 1200633093, 2017786079,
        -1506001743, 1039788924, -1732114852, -1662287259, 695004702, 1597536861, 675506688,
        -212282357, -353053375, -696550618, 678714703, 420862907, -2026670191, 1015785600,
        1769620293, -610679922, -1347017075, 556942045, -656279475, -1639635281, 1289257336,
        -2014922777, 1464280540, -1515498011, -89024566,
      ],
    );

    for (let i = 0; i < predict.length; i++) {
      if (predict[i] !== result[i])
        console.log(`[${i}] SEED-128-ECB Test Failed!! ${predict[i]} != ${result[i]}`);
    }
    console.log('SEED-128-ECB Test Complated.');
  }

  testCbcEncrypt() {
    console.log('## SEED-128-CBC Test ##');
    let predict = [
      209, 204, 130, 29, 230, 11, 39, 10, 214, 206, 155, 230, 173, 166, 180, 104, 84, 88, 62, 233,
      184, 139, 167, 72, 56, 178, 230, 240, 178, 108, 164, 232, 10, 100, 240, 49, 61, 187, 161, 55,
      49, 127, 231, 9, 118, 251, 105, 179,
    ];
    let data = {
      plain: [
        1, 6, 5, 32, 2, 7, 32, 97, 8, 2, 5, 101, 7, 101, 99, 5, 3, 2, 101, 8, 5, 4, 102, 9, 6, 100,
        99, 97, 97, 101, 2, 0, 6, 98, 100, 3, 4, 7, 2, 32, 37, 0, 34, 55, 33, 90, 66, 94,
      ],
      iv: [77, 111, 98, 105, 108, 101, 84, 114, 97, 110, 115, 75, 101, 121, 49, 48],
      roundKey: [
        1066845553, 2082674571, -1840851383, 964910051, -857270354, 929511153, -1268065374,
        -83756522, -1321776299, -940214361, 2006007614, -796071553, -747155261, -2111239305,
        -2033430436, -1860793111, -499053123, -325639299, -1802011979, -2083010684, -1678344915,
        946621008, 248789854, -1195106924, -610457673, 191638998, 431309434, -1930681761,
        -1832422468, 1677253561, 540516, -940784167,
      ],
      size: 48,
    };
    let result = this.cbcEncrypt(data.plain, data.iv, data.roundKey, data.size);

    for (let i = 0; i < predict.length; i++) {
      if (predict[i] !== result[i])
        console.log(`[${i}] SEED-128-CBC Test Failed!! ${predict[i]} != ${result[i]}`);
    }
    console.log('SEED-128-CBC Test Complated.');
  }
}

let handler = async m => m.reply(`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
1. Artinya: Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.

اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
2. Artinya: Segala puji bagi Allah, Tuhan seluruh alam,

الرَّحْمٰنِ الرَّحِيْمِۙ
3. Artinya: Yang Maha Pengasih, Maha Penyayang,

مٰلِكِ يَوْمِ الدِّيْنِۗ
4. Artinya: Pemilik hari pembalasan

اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ
5. Artinya: Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.

اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ ۙ
6. Artinya: Tunjukilah kami jalan yang lurus,

صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ
7. Artinya; (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.

*INGAT JANGAN PERNAH TINGALKAN SHALAT!*
*PENYUSUN BY REZZ*


`.trim()) 
handler.help = ['alfatihah']
handler.tags = ['tools']
handler.command = /^(alfatihah)$/i

handler.limit = true

module.exports = handler

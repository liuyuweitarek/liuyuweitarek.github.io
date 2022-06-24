'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/config": "75df32e165a68b8175333f208a341765",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "25a07366d1dbc78f2fc1ea5e4c55bd07",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7cb2a757406d7e50a8539ccf0f07b501",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b04bead570fc2ddd2000c4802284c846",
".git/logs/refs/heads/main": "7e212689fd7c971da4419b24e9cc243d",
".git/logs/refs/remotes/origin/HEAD": "1479a9393660d4db048a6027cfc449f7",
".git/logs/refs/remotes/origin/main": "03a2a914b9b51372dfbdf06beeab4def",
".git/objects/01/b3079a79d918f65975848ea7192c82d7426d79": "90c8064ea6f8a1ea3b0b85374338d0fa",
".git/objects/04/49ecc85df0db9be8b8fbe04189f8ad0d69cc29": "69de6e8e3777c04bde7688372b72c894",
".git/objects/04/bab32853dfece52edc2b0a4d4e4c51c835da07": "e508d879525f8b9d287173dd8180027e",
".git/objects/07/755d19a6a59d9aa717c88aae0ad24299bec05f": "87ee4b4fcb59acf928f79e28a2aa6477",
".git/objects/07/75c4c74442a364d21d494f68bc3d479e76fb0e": "ce63bcebe12a87ee0047fa19a81d581e",
".git/objects/07/7e71e8b0d4161c8b3081edb4021ec844a773a8": "ce97ac23d0ba7bb669e89ff843baed9f",
".git/objects/09/5f4780889d55db0c524bd3c14ac66904fe59e3": "df4b93fc7c8fed33ddddcd39bc512cc7",
".git/objects/09/73f18c63f5cdee5a2defddd932bc75ec23dadc": "7a250cb578ea92871d189c2ccf09efee",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/b5515a17a3ad2d35efb071a51dba91abf31036": "55061ef3bfcc17c7b33164d7f8db59a5",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/16/85a3fd8d083058e6a7720ca5d8781d832acdd7": "e60d447271b19d2863852148a3d3e41e",
".git/objects/18/98fd56e05a63cea61b0bb614df3e816d4951e1": "7a33329e2bfa7ab0505e6710fe0128e7",
".git/objects/19/2846a12085914cc0e38d9b48036b11d2a4d7c4": "1ceaceb9e2b3af1e9c752c4cbb2367e5",
".git/objects/1a/65b9ebae17b1c0d1d6a275d2e4d6d59885ff89": "340a98123406169fa0ac50b7083ae9d6",
".git/objects/1b/de6cc876515893a413cd7af2afcb7b834c63f0": "b89869ea2508f9b086472f7ca0286195",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/1c/744b77721f85949dda8c8ab7d6012e46c1f534": "0917f86ab9e2b6072722d8b91b7e7a3a",
".git/objects/1f/28ebf6ea2d43920309b1aca1c58c2660b8586e": "378654c21375b5480ecffae17f6eac68",
".git/objects/1f/86d93de5e6cef137a1290f98fcd314f777926e": "4cdf168949ec39571804821ab7889e1d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/26cf2676da6d468dd3845d6b176f16a1868304": "6bbe99bf31e168934909029ab52ab9c4",
".git/objects/21/b034b8ab883e19533f3ec084ab95b14e94bcbf": "dcae57f7b46be865565b2f6355ec2dda",
".git/objects/22/e02260bdba8097b56fd72160019e0d7522bc19": "0d2f332705408ea076fecf7792ce215d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/fb2386c7f3d536bc374ada45656b4f574ffafd": "f0551283378755b8ff9b798046799eee",
".git/objects/26/515e0db1dd99ea9dfebd80b700fe0c074cbda3": "05351b904fb4872e2e5d6cbbe5b3aef5",
".git/objects/27/5722cce040eb8acfdb110ea580bcb690d152f3": "560c5626c0c4404b88145fd9b1eebc1d",
".git/objects/28/dbb8b8b679d948f8ae33f85450c993ae6ef211": "65ffaf0311815776303e59e5e6b2caf2",
".git/objects/29/6112962b73daa4c30747fd8a7f4a6d618d3f45": "1b79d7a116d10e25f6c4b483f7f39d55",
".git/objects/2c/85998671f260f190288132ca0f783ac2dbcc52": "fd6b0959ebb02f7392a248c019a1bb51",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/f9e9fb780c9ba6b362e0685e2de54def703af9": "631353a2f2718e203b0136efbc8bb1ee",
".git/objects/31/95de775bc43ecd47ff87544cc110649a08db8c": "6fbcbf6693f83ecc942162801621b75c",
".git/objects/33/5b2c8f9efdaf5143d080c309e02b016f3d9af0": "abffec07d2575867f7b29c9e49fc189f",
".git/objects/36/12b0144544267a008dca54cfcafdcbfc2969f6": "38e8192abea5b14d3bcb27335ba49614",
".git/objects/37/9d18d889eaceb3d489faac02a76858eb782bd0": "b82f5f2c0ec14b51034ed5e017e64937",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/38/52d829eb09a99914305514dfce4e90a684cdfa": "012e396a92816bff86363c40b1bb2997",
".git/objects/3c/39066feadc94ba95e7fe9c080cf30042ecc45c": "45178fc429b5b26f23803513be7592cd",
".git/objects/3e/ef7a5b835e9a23cf342251a80b6471f640531d": "f8f837f56bac327cb8787db6599e71a0",
".git/objects/41/48b221eb4a5ed626c70792f322b6e5dd86b4b2": "066d15ac789494441123a5f880ad1918",
".git/objects/42/7076c07d52f334413b2da607641f09a8c731ad": "e79f4e2e3d0e2e0879480be3ec2ab2f0",
".git/objects/43/cd2b8d83ae2bbd70d92a7ccda1719f4a7185c1": "9f754200c10d23e302ae38d8fd9ce644",
".git/objects/44/f252318200f7016feec45fc6ce63765fc49893": "65a6cbf62555728cd322655d40abf752",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4d1f5eca5cfbacf9ca0737cfc36f529d1176ef": "86e04dbf3ff2bd6a6aaba25641bce3ec",
".git/objects/49/369786609327d9246d7dc241e706e1f5d5a31b": "1c4990d984aad36c9c59f8cba495e53a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/4b939be407fb0c81ed37a68b7bfb54908f06d5": "0d0fb14d368de5735f2dc5d5a967590d",
".git/objects/4d/8c130d93c11c6e7c846c4116549c0add6b4b4d": "ed0a3d162325b5aef586e5d4c969b2ec",
".git/objects/4e/08d0df6bed774e5e07f425cf87813cc539e33b": "e5dea971e6a49730e79349ee02e33a6d",
".git/objects/4e/83ee6f83c451a128b3570cfe2c93b7ce26016b": "eae5cb1eb493fbe3d451e64358a4fb33",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/038668c8e5d71258e39e48b2d3cb2df71b52f8": "9628062bddaeccfaef04b4602e7de31c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/c672cd1e0c15b5de790dce3e111e9dca5a96df": "8b1c3b7c1bc1f16ae45ff7a2ecebf4b8",
".git/objects/57/b6ff5a5b4f5fc70c7e8996ad247fe3020d8858": "447a0ab52f8840c92f38bfeb85d2e8f7",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/59/ec6d06a4de2de52ea2fd36b249a2dcb3d7f4a6": "5ebbe757140c1981df4ca35b8d9a9cd0",
".git/objects/5f/3435b3e7578c9d20d43da48e84070a80c96830": "f36c68e4dee9c6bd8658cda01d932caa",
".git/objects/60/a0d743729ea5d0198ad3b554b08de819755647": "c02e96916ecee3c61dc7934662d1c79a",
".git/objects/60/a91e8f535fc60c40c581b1b212e923b62d9975": "47c37eebc2aecc9f73ef989ba412b2fe",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/64/3ffb7d423b9691750c0fa3bdab52a68c75d206": "e70554310f0d9d62ea157da31d67c975",
".git/objects/65/fbcf65046b6c257f83ecde767c43d29e3e4f66": "aa8d9aada5c24d1ab6f02c652587dec6",
".git/objects/66/0fdb82c163eab22ea407b10d9346e28eedb21c": "a482457fdd87ae7d78aa08ee2c388264",
".git/objects/67/2b8a35c9e3853434a535229eb1bd7bc1c8b4a3": "d516940bdd7afa15511fe959c66a6d56",
".git/objects/67/91df8a2cfbcdf60556b7cb1a23dbe30685ac19": "77cfe3eec4546f111d7d7a008270ea62",
".git/objects/67/a5a9a237e0f4e4f150dea2720be54a502a431e": "bdb0153ca8f3e073f7f651d0b9b5bd70",
".git/objects/67/d8fc9cc3d76783b4e24421a55af319976e9207": "44da8bc40d47a4fe66b37aa5052a221e",
".git/objects/69/ca74b463382bf9942c11e24c19d2ab377b5979": "cb4aea0baaa1b80af7e157ce6de16881",
".git/objects/6a/3b54a558488f9a34273651bde8fb781e14de95": "45a503eb3fd50f7096a6a9483cd5cef0",
".git/objects/6a/69703faab8b4ef4e87092063cb472d55dd51d4": "ac5ed2ab0f6880c7b542d4f335d73853",
".git/objects/6d/4aa1a38742027b48a6843eb4257bd04e937645": "33c7cd41c9050bc3fa5dc8887078a623",
".git/objects/70/b549a8018603521084ab1fd21cedd2ff93e3bf": "b30444f0970c399bdeb2bd87baff5707",
".git/objects/71/00ed619170404cfad48a052eb10f5a708ab4bc": "5e4d1b8742f7986b939912e6a6c82438",
".git/objects/72/8ad049a1f2598586a93be7ab46a1242252543f": "6d6cc002604a9faf8e82224c95593c75",
".git/objects/75/2d4641c199a65e80cbe1e4597b79c2144b7bcb": "56d3a7f9feeb4084b2dc7d6a41e51601",
".git/objects/75/94d1ababc5441b82be9b24a84c16535df149f1": "e7c043485b2a14c700a87c6843018ec8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e1d11a1bd0e33b392eb07dd70b5b97c6ed916e": "a8207d673d97ad09761d5d6894783928",
".git/objects/7a/7d953616c465626d0317d0d958aaffe6821bf0": "3f892f8b09680e85e0520df16343e5b1",
".git/objects/7f/232f486647a3baa9890465bcdcb82191914b51": "fd6d685d0527d950f9787e644079acf1",
".git/objects/80/00b8a6d9a9826a895e50478e498b06f5ec837a": "7ab5a3714b7c8ab7ebec0069860b8287",
".git/objects/82/6decf14b7561697f160f2e64678534ee3f921d": "0724a991f6afd2383d13ab45e3012f39",
".git/objects/82/ea01f1e73d8f0e9f680c34e9be46735d7efd0e": "9ac3dfb2e272f6a5192681e4077886c2",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/83/cc594db28316d4761645bdd40994e50d902499": "fbccba7359e3017c5ebbb3172452799e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3b77695624ddc8758c4fd28f45278682356b08": "79d07995bd14db263da6f37e9ff23fc0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c21eb52e7755ed796b0e0711489e44749281c7": "c572c05f1dd72cabbc09427b72e96b54",
".git/objects/8b/adf3e8252ae45cff145c19041f910a3ca9b93a": "a5057427b885292de15057618a86a162",
".git/objects/8c/f63b8a7c4b4d70dea7181f92907e8ad44a92bf": "5f3811280408a72ab25b03fa418d1722",
".git/objects/8d/78f4f03620c4fd06874027881412ef07f63536": "4b054f60e85b45e6f18634eeb1119ed1",
".git/objects/90/ed80839c05b799fd9e0b96c6640c28d9a9fbff": "5bb8b0a11ac6579aaa14fc3bbba3e76a",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/96/468cfa0ba19d163940f96bd4962208291b740f": "f66ec9ab607b69beb7391fa3f696e997",
".git/objects/9b/037d41169a6aba5dfeef235d483f42c4efa904": "c65526add699a37cbfccbd1c3a2c2709",
".git/objects/a0/b2a73c42ca4029a98c0ce1ade294e35e616215": "d02434a504f1ec8440944089f7dc76b3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c1113f1b944433aa5012347b512a203d46d581": "385fae76bf4950443fb8b9816dd46dfc",
".git/objects/a3/e029880bf0434f6e1d1237fef49bd64767bb97": "8ff25406ae0c26a2912219ed2a584fec",
".git/objects/a4/7e462556634aa06d7c5ca7f0f740a7f214b8eb": "d743c98f166ba12a094ac089c2443929",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a5/0011999e0ca935a3fe6cafb285e66a87b8c707": "5ca2445c24276c0f9ff22882b7da088d",
".git/objects/a9/01ba55f8175ed3f61c93cd5a182b04868ae518": "14af791dd09b088b6250c6974f2328c3",
".git/objects/ab/0605a1973e2a3bd274d88d8968afaf3524e5a6": "e1f45ab6fee1e9f6f808762b93a1fbcf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/5ce5203f42d6202d1024fbcdf51d9f5c565862": "115e7b1633da767501d5745d32774f81",
".git/objects/ad/bb2254c1ae30d9d3b8fa1781e00a4c0bf62c3c": "dfd0d9d051555fb06a0734b586359e5f",
".git/objects/ad/ea109623ecf02951290c049f8b574c80a8ff3b": "72cdd21d13c5601f54797c0486ee7433",
".git/objects/b0/6579b14b331e6e1427593ab7e45cad9afbbd9f": "ffeeaa53772ba8eecf8655caa656b038",
".git/objects/b1/f0e521b418b9ca00795bbbbf4ad80a5f21d7c0": "f3d8c6f36c55edc59ff5edf0410a30db",
".git/objects/b2/7f163420bbb7cac7f9b5a3b7b0c2ca1a346062": "f9c2194e3233fc8b30f6b05cac29a36f",
".git/objects/b4/e1104ee9610e80ff760ed5d57d71c942184ea3": "c125ec0bccb0cd850728f8f01444c6f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/c1419b698e09c48bf74b71c469109190d961c5": "8558930a84d4cf19bdcfd8385ca10ea8",
".git/objects/bf/5b0fce146152151d2fcce635fd3d6d0e83e6b5": "127957b6c32a8f1d6948fc6f26145f61",
".git/objects/c0/6ee7941b66630f75f539764f28a6471eef97ad": "b0bfd7cc7e81d64bbdb51d3f8da25eb8",
".git/objects/c1/f41872bcb0c40713e801858505dce4238740d8": "12492e2622783018f619df868525eba8",
".git/objects/c2/42481893adba2388bc0158a2c2ab7d7f92ad5f": "6471ecafd11dd690188dd8b3a82171ef",
".git/objects/c3/230ad6b79eb37ec81a9d725f496831ba20b576": "4e60e3ec4eda65106bc2d6869788775c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/0505997301d59aef5529c61c3f674c133f5f76": "11c546a509bc8dadd3e6be172d3df5e3",
".git/objects/c4/720a028b931b601b3c0cf00963ab23b20a3a02": "e4e39946ec558f183f9ca8a23eb8a620",
".git/objects/c6/912c9872fd97d0dc2b3c383c2199b9588ec36f": "99c90e65906b2386f84f0ce18f392603",
".git/objects/c7/0c24251de8dad25fae7cf4f4280d8b7dafde74": "852b94fbbb3f90190b8dd3872f525420",
".git/objects/c7/a6e0798175a8f2723f857b5077e7e08feb9756": "0d12250962a97bb3ac765cd170c70708",
".git/objects/c8/3adea25a1cbf4212c662e264e792a97ff9af81": "fa98fa1865c598107a23b343bf7f1999",
".git/objects/cb/b0b04a5fed84417efec55498e8f9dcdb9f575f": "be7d67e562ad4a65dc38ec675d4be6fe",
".git/objects/cc/63e8a32636badc5917813964a1be8ad2678136": "36dc8138a34204805a4879abce1920a4",
".git/objects/cf/7a4dfe02bb6109fa9f9ebf641fb26f54d8397d": "5a2de253ee46c018ab72bd1b18fe0a30",
".git/objects/d3/a8694e5439c038b64cb113056866ab5ac49924": "b44c8ef319df37f60d0386a86604bd1e",
".git/objects/d4/207bc2dec0e1d644b90f20166d3f20f10854a4": "7f32841fe9761e43b21c5f699123cc36",
".git/objects/d4/fa5a555ca2f9ee9eaedec5dea4e699fba45edf": "9622962ae24299d08c4119c146c10fb6",
".git/objects/d5/7752e03cb78d9a09964e4ca44d541c8c99a73d": "1680a912ce03d6cb6a0a0da511e2b1cc",
".git/objects/d6/6605e3b19fd548064a48148adf1621fa1f3b93": "0578d0c745304015652849483eceb6a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c6b280de9735d5001f212e911c1fa7f8d28d9e": "179df4f5aa8bfd7bd36e6f132c9980b2",
".git/objects/d8/fba167c65968812810ac68fc6d8a47e61a0496": "99c71eddf0e2ad4b3dd990266f34cac9",
".git/objects/d9/831d9466fcfce491467a0eda0c597a2aff0ec6": "7af128285ccf4d32416f11cc3fc4c0ee",
".git/objects/d9/c7d989b9cca5b70183a5e7a00091dfff4d49d5": "59ffc355710114656a031a56237676ae",
".git/objects/d9/f502c12dd0cd7567aae31cd2f1e548629a4707": "e920364a355b3a7a1fbd12d97c852cc0",
".git/objects/da/b6487043952bb539806307c9128ad3a97dcbc7": "76dca7c0026e9c2f75535d6da27c498e",
".git/objects/df/5c3ce9f99fba17829a9a401b378f99d686f06f": "79d44561591ba61189c6cc494ce0a4bb",
".git/objects/df/b68ed479384e1686fef43456371cfbb8111fc3": "b610d0c63c9936749154d6d6580fbff1",
".git/objects/e2/22e47e2cb7a62b0dc87a829f0b67ee9c0cdad4": "11143dbcef6740c593a788d3b06d0990",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/90963fb690d61fd3b45e4eebdf74a2e1ec7c47": "1a9ca1332295d05d77d3c6cfd54dca30",
".git/objects/e8/0f28b8979928ef70b3b79761149b18a3f411ad": "928e644192e35d9a6785aa1424ae390f",
".git/objects/e8/31e6cd1a37c752eb57b881b11d71543a30ac0b": "3d3b6682b361d594812b37bc790dbcea",
".git/objects/e9/05f45bacb536c3415ab39ae0ccdb519cb51130": "1840e9dcaa1e07ce5f7438c97d2b20ab",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9aea3d1d20f07aa01c575b29d059b17822726c": "d983e5268f971423901cf52fa7c745cb",
".git/objects/f3/3852cb8ca3490e7901a808f57055df8119b695": "a3927d9b4015d73741426839db6ebaeb",
".git/objects/f3/d63ec2a40f5a832b369c4c08ecdc5e325d5317": "8ad86a0cdd07ea798f7c54bc5418d34b",
".git/objects/f5/3f41e2a240242575046fcd385978a0373721de": "8718daae697156407d27809bc7d2243d",
".git/objects/f5/cd5d70e16486f65ae92e5d726820fd337f81b4": "32b02eaa38787641ab633afbe1f9aacc",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/f9/02550be8ba39aab7e7a8e76f05d47ffb0bc55a": "597472a87386f9e69a9759a33820bc14",
".git/objects/f9/ec31544070c50541dbaed641f8f295047b65ff": "9f56df4005aa1ee9222c0bed13f23d17",
".git/objects/fe/9c9672dab401651641adab2c7bd592f550374a": "47e16b71740e7991cc48883046d5217b",
".git/objects/pack/pack-8e7831f0741295351a3ca0f4d9a3b70279e0bedd.idx": "df5cad0953d28b76ac01195eed8d1ec4",
".git/objects/pack/pack-8e7831f0741295351a3ca0f4d9a3b70279e0bedd.pack": "5277cc06dc9de8af646ef13efb2d5ba9",
".git/packed-refs": "91098a3ea4f688d3556913be5de22982",
".git/refs/heads/main": "010f1799b6da96ffbbccf961f4ab4136",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "010f1799b6da96ffbbccf961f4ab4136",
"assets/AssetManifest.json": "077c46bb2cfd2587bd5915f7c16b87ba",
"assets/assets/animations/jump-man.riv": "e17fd8999de81b64c68a3f5ce7d743e9",
"assets/assets/animations/Penguin.flr": "479d849d0fdd0429bb0b9a7c93c7a278",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/camp.jpg": "a96d008eba49339d68055c96b799031e",
"assets/assets/images/cat-removebg-preview.png": "7c45e3a679a1f459a6646fb884897b77",
"assets/assets/images/cat.jpg": "c0bdcd093f4503ec2243273a8c8223af",
"assets/assets/images/cat_dude.jpg": "a99a183f323c0ab15d0e36ca284a8ac4",
"assets/assets/images/chat.png": "c4158b64297f39523a5a9b6494ba3842",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/downloadcv.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/facebook-128.png": "1a1de538cb956bb9c07d16aa36b9cf21",
"assets/assets/images/favicon.ico": "9b3e7e2d777decc76bea6b8fd7e9340e",
"assets/assets/images/github-144.png": "aa5340220a2e10164b1f8bb80c2397c1",
"assets/assets/images/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/GitHub-Mark-Light-120px-plus.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/linkedin-128.png": "16eacca5647e496a26ce83d14200d91f",
"assets/assets/images/linkedin-circled-128.png": "637825c9ac5440de25d3fd8aba01ffe4",
"assets/assets/images/linkedin-circled-512.png": "7dff2bf06299a006a550abb4e8004a8e",
"assets/assets/images/linkedin-circled.png": "7dff2bf06299a006a550abb4e8004a8e",
"assets/assets/images/linkedin_circled.png": "815e142f8a9ba6d637de8e7d11ee430e",
"assets/assets/images/logo_removebg_rev.png": "4277b440634f9bdd2f72bb6b73a74f1f",
"assets/assets/images/meta-100.png": "47adde9d1f67ceca3270ace09918fa61",
"assets/assets/images/meta-144.png": "1ad2f78ebb8be4249b5457cc430db8f5",
"assets/assets/images/meta-r.png": "47d82801fc7a40e55ae11b72262088fc",
"assets/assets/images/meta-w-100.png": "b46bd7ee8d47dbdfe76d24d07e83ac28",
"assets/assets/images/meta.png": "46fa06e0d5c1fea7284ed85eccac61bf",
"assets/assets/images/people_only.png": "3d3aba38d9e4cb1af54df29bf679fd7f",
"assets/assets/images/people_pixel.png": "f8e82469ec0c5658654cbb315007945d",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/robotbg.jpg": "dade43667bceb2ab55b957a75fe85310",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "244a346eeabac10da04048bf00bcd41b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "9b3e7e2d777decc76bea6b8fd7e9340e",
"icons/cat_dude.jpeg": "a99a183f323c0ab15d0e36ca284a8ac4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3348c61ef0e0aa4d3e2257f5a89cae07",
"/": "3348c61ef0e0aa4d3e2257f5a89cae07",
"main.dart.js": "a25223acc1cc585ed9f410b32eed1bf5",
"manifest.json": "0db406d8fa44954f75b4f6305172b202",
"version.json": "bcdbe0343906e76eb667a00cd7e3b9e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

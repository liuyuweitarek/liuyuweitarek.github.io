'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "79c21f5a178bb6c0e9a67daa694ba0ee",
".git/config": "75df32e165a68b8175333f208a341765",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5347427c57af6b1067a5d248c1570b4a",
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
".git/index": "8fde9ffceea33ab3922212cba2ff3e35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a4e0ac98eb98e8bc1de6ea9acdb19e1",
".git/logs/refs/heads/main": "9a4e0ac98eb98e8bc1de6ea9acdb19e1",
".git/logs/refs/remotes/origin/HEAD": "1479a9393660d4db048a6027cfc449f7",
".git/logs/refs/remotes/origin/main": "1c1a0bda98cda6a2e5c2571851e753bc",
".git/objects/04/49ecc85df0db9be8b8fbe04189f8ad0d69cc29": "69de6e8e3777c04bde7688372b72c894",
".git/objects/04/bab32853dfece52edc2b0a4d4e4c51c835da07": "e508d879525f8b9d287173dd8180027e",
".git/objects/07/755d19a6a59d9aa717c88aae0ad24299bec05f": "87ee4b4fcb59acf928f79e28a2aa6477",
".git/objects/07/7e71e8b0d4161c8b3081edb4021ec844a773a8": "ce97ac23d0ba7bb669e89ff843baed9f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/b5515a17a3ad2d35efb071a51dba91abf31036": "55061ef3bfcc17c7b33164d7f8db59a5",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/18/98fd56e05a63cea61b0bb614df3e816d4951e1": "7a33329e2bfa7ab0505e6710fe0128e7",
".git/objects/1a/65b9ebae17b1c0d1d6a275d2e4d6d59885ff89": "340a98123406169fa0ac50b7083ae9d6",
".git/objects/1b/de6cc876515893a413cd7af2afcb7b834c63f0": "b89869ea2508f9b086472f7ca0286195",
".git/objects/1c/744b77721f85949dda8c8ab7d6012e46c1f534": "0917f86ab9e2b6072722d8b91b7e7a3a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/26cf2676da6d468dd3845d6b176f16a1868304": "6bbe99bf31e168934909029ab52ab9c4",
".git/objects/22/e02260bdba8097b56fd72160019e0d7522bc19": "0d2f332705408ea076fecf7792ce215d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/fb2386c7f3d536bc374ada45656b4f574ffafd": "f0551283378755b8ff9b798046799eee",
".git/objects/27/5722cce040eb8acfdb110ea580bcb690d152f3": "560c5626c0c4404b88145fd9b1eebc1d",
".git/objects/2c/85998671f260f190288132ca0f783ac2dbcc52": "fd6b0959ebb02f7392a248c019a1bb51",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/f9e9fb780c9ba6b362e0685e2de54def703af9": "631353a2f2718e203b0136efbc8bb1ee",
".git/objects/31/95de775bc43ecd47ff87544cc110649a08db8c": "6fbcbf6693f83ecc942162801621b75c",
".git/objects/3c/39066feadc94ba95e7fe9c080cf30042ecc45c": "45178fc429b5b26f23803513be7592cd",
".git/objects/3e/ef7a5b835e9a23cf342251a80b6471f640531d": "f8f837f56bac327cb8787db6599e71a0",
".git/objects/41/48b221eb4a5ed626c70792f322b6e5dd86b4b2": "066d15ac789494441123a5f880ad1918",
".git/objects/42/7076c07d52f334413b2da607641f09a8c731ad": "e79f4e2e3d0e2e0879480be3ec2ab2f0",
".git/objects/43/cd2b8d83ae2bbd70d92a7ccda1719f4a7185c1": "9f754200c10d23e302ae38d8fd9ce644",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/4b939be407fb0c81ed37a68b7bfb54908f06d5": "0d0fb14d368de5735f2dc5d5a967590d",
".git/objects/4d/8c130d93c11c6e7c846c4116549c0add6b4b4d": "ed0a3d162325b5aef586e5d4c969b2ec",
".git/objects/4e/08d0df6bed774e5e07f425cf87813cc539e33b": "e5dea971e6a49730e79349ee02e33a6d",
".git/objects/4e/83ee6f83c451a128b3570cfe2c93b7ce26016b": "eae5cb1eb493fbe3d451e64358a4fb33",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/038668c8e5d71258e39e48b2d3cb2df71b52f8": "9628062bddaeccfaef04b4602e7de31c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/ec6d06a4de2de52ea2fd36b249a2dcb3d7f4a6": "5ebbe757140c1981df4ca35b8d9a9cd0",
".git/objects/5f/3435b3e7578c9d20d43da48e84070a80c96830": "f36c68e4dee9c6bd8658cda01d932caa",
".git/objects/60/a0d743729ea5d0198ad3b554b08de819755647": "c02e96916ecee3c61dc7934662d1c79a",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/66/0fdb82c163eab22ea407b10d9346e28eedb21c": "a482457fdd87ae7d78aa08ee2c388264",
".git/objects/67/a5a9a237e0f4e4f150dea2720be54a502a431e": "bdb0153ca8f3e073f7f651d0b9b5bd70",
".git/objects/69/ca74b463382bf9942c11e24c19d2ab377b5979": "cb4aea0baaa1b80af7e157ce6de16881",
".git/objects/6a/3b54a558488f9a34273651bde8fb781e14de95": "45a503eb3fd50f7096a6a9483cd5cef0",
".git/objects/6d/4aa1a38742027b48a6843eb4257bd04e937645": "33c7cd41c9050bc3fa5dc8887078a623",
".git/objects/70/b549a8018603521084ab1fd21cedd2ff93e3bf": "b30444f0970c399bdeb2bd87baff5707",
".git/objects/71/00ed619170404cfad48a052eb10f5a708ab4bc": "5e4d1b8742f7986b939912e6a6c82438",
".git/objects/75/2d4641c199a65e80cbe1e4597b79c2144b7bcb": "56d3a7f9feeb4084b2dc7d6a41e51601",
".git/objects/75/94d1ababc5441b82be9b24a84c16535df149f1": "e7c043485b2a14c700a87c6843018ec8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e1d11a1bd0e33b392eb07dd70b5b97c6ed916e": "a8207d673d97ad09761d5d6894783928",
".git/objects/7f/232f486647a3baa9890465bcdcb82191914b51": "fd6d685d0527d950f9787e644079acf1",
".git/objects/82/6decf14b7561697f160f2e64678534ee3f921d": "0724a991f6afd2383d13ab45e3012f39",
".git/objects/82/ea01f1e73d8f0e9f680c34e9be46735d7efd0e": "9ac3dfb2e272f6a5192681e4077886c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/adf3e8252ae45cff145c19041f910a3ca9b93a": "a5057427b885292de15057618a86a162",
".git/objects/8d/78f4f03620c4fd06874027881412ef07f63536": "4b054f60e85b45e6f18634eeb1119ed1",
".git/objects/90/ed80839c05b799fd9e0b96c6640c28d9a9fbff": "5bb8b0a11ac6579aaa14fc3bbba3e76a",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/7e462556634aa06d7c5ca7f0f740a7f214b8eb": "d743c98f166ba12a094ac089c2443929",
".git/objects/a5/0011999e0ca935a3fe6cafb285e66a87b8c707": "5ca2445c24276c0f9ff22882b7da088d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/5ce5203f42d6202d1024fbcdf51d9f5c565862": "115e7b1633da767501d5745d32774f81",
".git/objects/ad/bb2254c1ae30d9d3b8fa1781e00a4c0bf62c3c": "dfd0d9d051555fb06a0734b586359e5f",
".git/objects/b1/f0e521b418b9ca00795bbbbf4ad80a5f21d7c0": "f3d8c6f36c55edc59ff5edf0410a30db",
".git/objects/b2/7f163420bbb7cac7f9b5a3b7b0c2ca1a346062": "f9c2194e3233fc8b30f6b05cac29a36f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/c1419b698e09c48bf74b71c469109190d961c5": "8558930a84d4cf19bdcfd8385ca10ea8",
".git/objects/bf/5b0fce146152151d2fcce635fd3d6d0e83e6b5": "127957b6c32a8f1d6948fc6f26145f61",
".git/objects/c0/6ee7941b66630f75f539764f28a6471eef97ad": "b0bfd7cc7e81d64bbdb51d3f8da25eb8",
".git/objects/c3/230ad6b79eb37ec81a9d725f496831ba20b576": "4e60e3ec4eda65106bc2d6869788775c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/b0b04a5fed84417efec55498e8f9dcdb9f575f": "be7d67e562ad4a65dc38ec675d4be6fe",
".git/objects/d4/fa5a555ca2f9ee9eaedec5dea4e699fba45edf": "9622962ae24299d08c4119c146c10fb6",
".git/objects/d5/7752e03cb78d9a09964e4ca44d541c8c99a73d": "1680a912ce03d6cb6a0a0da511e2b1cc",
".git/objects/d8/fba167c65968812810ac68fc6d8a47e61a0496": "99c71eddf0e2ad4b3dd990266f34cac9",
".git/objects/d9/831d9466fcfce491467a0eda0c597a2aff0ec6": "7af128285ccf4d32416f11cc3fc4c0ee",
".git/objects/d9/c7d989b9cca5b70183a5e7a00091dfff4d49d5": "59ffc355710114656a031a56237676ae",
".git/objects/da/b6487043952bb539806307c9128ad3a97dcbc7": "76dca7c0026e9c2f75535d6da27c498e",
".git/objects/e2/22e47e2cb7a62b0dc87a829f0b67ee9c0cdad4": "11143dbcef6740c593a788d3b06d0990",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/90963fb690d61fd3b45e4eebdf74a2e1ec7c47": "1a9ca1332295d05d77d3c6cfd54dca30",
".git/objects/e8/0f28b8979928ef70b3b79761149b18a3f411ad": "928e644192e35d9a6785aa1424ae390f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f3/d63ec2a40f5a832b369c4c08ecdc5e325d5317": "8ad86a0cdd07ea798f7c54bc5418d34b",
".git/objects/f5/cd5d70e16486f65ae92e5d726820fd337f81b4": "32b02eaa38787641ab633afbe1f9aacc",
".git/objects/f9/02550be8ba39aab7e7a8e76f05d47ffb0bc55a": "597472a87386f9e69a9759a33820bc14",
".git/objects/f9/ec31544070c50541dbaed641f8f295047b65ff": "9f56df4005aa1ee9222c0bed13f23d17",
".git/objects/fe/9c9672dab401651641adab2c7bd592f550374a": "47e16b71740e7991cc48883046d5217b",
".git/objects/pack/pack-8e7831f0741295351a3ca0f4d9a3b70279e0bedd.idx": "df5cad0953d28b76ac01195eed8d1ec4",
".git/objects/pack/pack-8e7831f0741295351a3ca0f4d9a3b70279e0bedd.pack": "5277cc06dc9de8af646ef13efb2d5ba9",
".git/packed-refs": "91098a3ea4f688d3556913be5de22982",
".git/refs/heads/main": "95d0bd3e761ebd8d472db51592f15cfa",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "95d0bd3e761ebd8d472db51592f15cfa",
"assets/AssetManifest.json": "2e112ef54931229099f3ad120302f1ea",
"assets/assets/animations/Penguin.flr": "479d849d0fdd0429bb0b9a7c93c7a278",
"assets/assets/images/android-chrome-192x192.png": "d68e8c94bc81e9d062e70cfe35dcc47f",
"assets/assets/images/android-chrome-512x512.png": "146b2a5184267cc6fade7989560bb35b",
"assets/assets/images/apple-touch-icon.png": "11a77fdd53360332534efb4a36ac636c",
"assets/assets/images/background.png": "369dfe905ecf653f275839dea3b624b2",
"assets/assets/images/bridge.jpg": "58adef8119435777c920c44c467dce9b",
"assets/assets/images/camp.jpg": "a96d008eba49339d68055c96b799031e",
"assets/assets/images/cat-removebg-preview.png": "7c45e3a679a1f459a6646fb884897b77",
"assets/assets/images/cat.jpg": "c0bdcd093f4503ec2243273a8c8223af",
"assets/assets/images/cat_dude-removebg-preview.png": "b24f8fc78a6d6d73879bcf55f21c2ed8",
"assets/assets/images/cat_dude.jpeg": "a99a183f323c0ab15d0e36ca284a8ac4",
"assets/assets/images/downloadcv.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/favicon-16x16.png": "d57c04f1351f272603e2ef831ee592a8",
"assets/assets/images/favicon-32x32.png": "90d456cf657218e7a938499435419920",
"assets/assets/images/favicon.ico": "9b3e7e2d777decc76bea6b8fd7e9340e",
"assets/assets/images/forest.jpg": "00697b080ef602bb9dcf00980c47cfb9",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/linux.jpg": "69d1f6bfd0b80b08dd6c47f0ef0998ca",
"assets/assets/images/logo-removebg.png": "27a06b687654f85d44c7ed09bf4f964e",
"assets/assets/images/logo.png": "3f9ab1a162e5d15550aa32ecc63f9d52",
"assets/assets/images/logo_removebg_rev.png": "4277b440634f9bdd2f72bb6b73a74f1f",
"assets/assets/images/loveyourself.jpg": "452628647b303eab62de3b85dba227b0",
"assets/assets/images/neuron.jpg": "fe18a32777020ea4b65fc516d7d918e2",
"assets/assets/images/people_only.png": "3d3aba38d9e4cb1af54df29bf679fd7f",
"assets/assets/images/people_pixel.png": "f8e82469ec0c5658654cbb315007945d",
"assets/assets/images/psy.png": "6b3290c0fe915e657ebeccbfe0e34ae9",
"assets/assets/images/railway.jpg": "b2dc9ea73774c6921acfdb2aecc01756",
"assets/assets/images/robotbg.jpg": "dade43667bceb2ab55b957a75fe85310",
"assets/assets/images/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "fd8934133e70d6cdd366d361188ef770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "9b3e7e2d777decc76bea6b8fd7e9340e",
"icons/cat_dude.jpeg": "a99a183f323c0ab15d0e36ca284a8ac4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b86acdecbfd7ec5ab54c1961d1fba78c",
"/": "b86acdecbfd7ec5ab54c1961d1fba78c",
"main.dart.js": "fbac4b6a6c9328e82db67da5091681da",
"manifest.json": "518bf3496d5a88781b6f34ebe9384d7e",
"p5/p5.js": "86415c6fd3eb12c7c594e98ec72340ab",
"p5/p5.sound.min.js": "9cec1d36591e4906a2c9fe3ea49c9684",
"README.md": "d629e09c10045a515b3a3540bc0748cd",
"version.json": "7fddcd18a5134105a1dbe7900d6b5084"
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

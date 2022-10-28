let abgm=["https://cdn1-school.ai-classes.com/fpupload/20221028/51585/26ee951b37dd4fe0b69695475c91e3ea/001.mp3","https://cdn1-school.ai-classes.com/fpupload/20221028/51585/a6b01fd9e0864ba5a36d4d166c0f8077/001.mp3"]
let asong=["Relentless[RWBY doujin remix]-Cre-sc3NT","Infinite Heaven-HyuN"]
export function fbgm(abgm,asong,x){
	let bgm=document.getElementById("bgm");
	let txt=document.getElementById("txt");
	bgm.outerHTML="<source id=\"bgm\" src="+abgm[x]+" type=\"audio/mp3\"></source>";
	txt.innerHTML=asong[x];
}

export function frnd(x){
	let seed=math.random();
	let x=math.round(seed.tofixed(2)*2);
}

export {abgm,asong};
/*

name : 파일명

msg : 기록할 내용

*/

function writeFile(name, msg){

	if(name == "") return false;

	var defaultpath = "C:"; // 기록하고자 하는 경로. ex) C:\\Program Files\\logs

	var fileObject = new ActiveXObject("Scripting.FileSystemObject");

	var fullpath = defaultpath+"\\"+name;

 // 파일이 생성되어있지 않으면 새로 만들고 기록

	if(!fileObject.FileExists(fullpath)){

		var fWrite = fileObject.CreateTextFile(fullpath,false);

		fWrite.write(msg);

		fWrite.close();

	}else{

// 파일이 이미 생성되어 있으면 appending 모드로 파일 열고 기록

		var fWrite = fileObject.OpenTextFile(fullpath, 8);

		fWrite.write(msg);

		fWrite.close();

	}

}
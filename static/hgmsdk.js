var HGApp = {
	show : function() {
		cordova.exec(null, null, "HGApp", "show", []);
	},
	back : function() {
		cordova.exec(null, null, "HGApp", "back", []);
	},
	close : function() {
		cordova.exec(null, null, "HGApp", "close", []);
	},
	clearCache : function() {
		cordova.exec(null, null, "HGApp", "clearCache", []);
	},
	forward : function(action, apkurl) {
		cordova.exec(null, null, "HGApp", "forward", [action, apkurl]);
	},
	forward_xhw : function(action, apkurl) {
		cordova.exec(null, null, "HGApp", "forward_xhw", [action, apkurl]);
	}
};

var HGUtil = {
	toast : function(msg, textsize, duration, position, offsetX, offsetY) {
		if (arguments.length != 6 && arguments.length != 1) {
			console.log('arguments not right!');
			return;
		}
		try {
			if (arguments.length == 1) {
				cordova.exec(null, null, "HGUtil", "toast", [ msg ]);
			}
			if (arguments.length == 6) {
				if (textsize > 50 || textsize < 10) {
					return;
				} else if (position != 48 && position != 80 && position != 3
						&& position != 5 && position != 17 && position != 1
						&& position != 16) {
					return;
				}
				cordova.exec(null, null, "HGUtil", "toast", [ msg, textsize,
						duration, position, offsetX, offsetY ]);
			}

		} catch (e) {
			console.log('error: ' + e);
		}
	},

	picker : function(title, pickerflag, items, success, fail) {
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGUtil", "picker", [ title,
					pickerflag, items ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	copy : function(msg, success, fail) {
		if (arguments.length != 1) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGUtil", "copy", [ msg ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	paste : function(callback) {
		if (arguments.length != 1) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(callback, null, "HGUtil", "paste", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
};
var HGPreview = {
	type : {
		SHUSHENG : 1,
		OFFICE : 2,
		TIFF : 3,
		PDF : 4,
		IMAGE : 5,
		TXT : 6
	},
	show : function(type, param, success, fail) {
		if (arguments.length != 4) {
			console.log('arguments not right!');
			return;
		}
		try {
			if (HGPreview.type.SHUSHENG == type
					|| HGPreview.type.OFFICE == type
					|| HGPreview.type.TIFF == type
					|| HGPreview.type.PDF == type
					|| HGPreview.type.IMAGE == type
					|| HGPreview.type.TXT == type) {
			} else {
				console.log('HGPreview error type: ' + type);
				return;
			}
			cordova.exec(success, fail, "HGPreview", "show", [ type, param ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};

var HGRequest = {
	service : function(method, server, url, params, jsonData, success, fail) {
		if (arguments.length != 7) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGRequest", method, [ server, url,
					params, jsonData ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	get : function(server, url, params, jsonData, success, fail) {
		if (arguments.length != 6) {
			console.log('arguments not right!');
			return;
		}
		HGRequest.service("GET", server, url, params, jsonData, success, fail);
	},
	get4Json : function(server, url, params, success, fail) {
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return;
		}
		HGRequest.service("GET", server, url, params, true, success, fail);
	},
	post : function(server, url, params, jsonData, success, fail) {
		if (arguments.length != 6) {
			console.log('arguments not right!');
			return;
		}
		HGRequest.service("POST", server, url, params, jsonData, success, fail);
	},
	post4Json : function(server, url, params, success, fail) {
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return;
		}
		HGRequest.service("POST", server, url, params, true, success, fail);
	},
	upload : function(server, url,getLengthUrl, params, jsonData, successCallback, errorCallback) {
        if (arguments.length != 7) {
            console.log('arguments not right!');
            return;
        }
        try {
            cordova.exec(successCallback, errorCallback, "HGRequest", "upload", [ server, url,getLengthUrl,
                params, jsonData ]);
        } catch (e) {
            console.log('error: ' + e);
        }
	}
};

var HGUser = {
	getUserInfo : function(success, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGUser", "getUserInfo", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};

var HGPush = {
	getPush : function(success, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGPush", "getPush", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	listener : null,
	addPushListener : function(lis) {
		try {
			if (typeof (lis) != "function") {
				console.log('Push listener must be function!');
				return;
			}
			HGPush.listener = lis;
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	push : function() {
		try {
			HGPush.listener();
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};

var HGStatus = {
	getStatus : function(success, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGStatus", "getStatus", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};

var HGUserCert = {
	getUserCert : function(success, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGUserCert", "getUserCert", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	getSignData:function(data,success,fail){
     	if (arguments.length != 3) {
            console.log('arguments not right!');
       		return;
        }
        try {
         	cordova.exec(success, fail, "HGUserCert", "signData", [data]);
        } catch (e) {
         	console.log('error: ' + e);
        }
     	},
	encryptData:function(data,success,fail){
	    if (arguments.length != 3) {
    		console.log('arguments not right!');
    		return;
    	}
    	try {
    		cordova.exec(success, fail, "HGUserCert", "encryptData", [data]);
    	} catch (e) {
    		console.log('error: ' + e);
    	}
	},
	decryptData:function(data,success,fail){
	    if (arguments.length != 3) {
    		console.log('arguments not right!');
    		return;
    	}
    	try {
    		 cordova.exec(success, fail, "HGUserCert", "decryptData", [data]);
    	} catch (e) {
    		 console.log('error: ' + e);
    	}
	},
    verifyData:function(oriData,sign,publicKey,success,fail){
        if (arguments.length != 5) {
        	console.log('arguments not right!');
            return;
        }
        try {
        	cordova.exec(success, fail, "HGUserCert", "verifyData", [oriData,sign,publicKey]);
        } catch (e) {
        	console.log('error: ' + e);
        }
    }
};
var HGCamera = {
	takePicture : function(label, time, saveImgUrl, success, fail) {
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGCamera", "getPic", [ label, time,
					saveImgUrl ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
    takePictureNew : function(label, time, saveImgUrl,compress, success, fail) {
        if (arguments.length != 6) {
            console.log('arguments not right!');
            return;
        }
        try {
            cordova.exec(success, fail, "HGCamera", "getPicCompress", [ label, time,
                saveImgUrl,compress ]);
        } catch (e) {
            console.log('error: ' + e);
        }
    },
	takePictureForCrop : function(success, fail) {
        if (arguments.length != 2) {
            console.log('arguments not right!');
            return;
        }
        try {
            cordova.exec(success, fail, "HGCamera", "cropCamera", []);
        } catch (e) {
            console.log('error: ' + e);
        }
    },
    takePictureForCrop2 : function(success, fail) {
         if (arguments.length != 2) {
             console.log('arguments not right!');
             return;
         }
         try {
             cordova.exec(success, fail, "HGCamera", "cropImage", []);
         } catch (e) {
             console.log('error: ' + e);
         }
     },
    takePictureBySysCamera : function(label, time, saveImgUrl,compress,showPreview, success, fail) {
        if (arguments.length != 7) {
            console.log('arguments not right!');
            return;
        }
        try {
            cordova.exec(success, fail, "HGCamera", "getPicFromCamera", [ label, time,
                saveImgUrl,compress,showPreview ]);
        } catch (e) {
            console.log('error: ' + e);
        }
    }
};
var HGFile = {
	createDir : function(newDirame, success, fail) {
		if (arguments.length != 3) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGFile", "createDir", [ newDirame ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	removeFile : function(Dirame, success, fail) {
		if (arguments.length != 3) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGFile", "removeFile", [ Dirame ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	renameFile : function(oldfileurl, newfilename, success, fail) {
		if (arguments.length != 4) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGFile", "renameFile", [ oldfileurl,
					newfilename ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	getFileList : function(fileurl, success, fail) {
		if (arguments.length != 3) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGFile", "getFileList", [ fileurl ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	getBase64File : function(fileurl, success, fail) {
		if (arguments.length != 3) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGFile", "getBase64File", [ fileurl ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
};
var HGWebUtil = {
	/*callExternalPlayer : function(url, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova
					.exec(null, fail, "HGWebUtil", "callExternalPlayer",
							[ url ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},*/
	callInnerPlayer : function(param, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(null, fail, "HGWebUtil", "callInnerPlayer", [ param ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},

	/*callExternalBrowser : function(url, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(null, fail, "HGWebUtil", "callExternalBrowser",
					[ url ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},

	callInnerBrowser : function(url, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(null, fail, "HGWebUtil", "callInnerBrowser", [ url ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
*/
};
var HGBackUtil = {
	finish : function() {
		try {
			cordova.exec(null, null, "HGBackUtil", "finish", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};
var HGRegisterBack = {
	callBackMethod : function() {
		try {
			cordova.exec(null, null, "HGRegisterBack", "callBackMethod", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};
var HGScanner = {
	scannerQR : function(success, fail) {
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGScanner", "scannerQR", []);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
	createQR : function(strMsg, success, fail) {
		if (arguments.length != 3) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGScanner", "createQR", [ strMsg ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	}
};
var HGSign = {
	getSign : function(time, msg, paintSize, success, fail) {
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return;
		}
		try {
			cordova.exec(success, fail, "HGSign", "getSign", [ time, msg,
					paintSize ]);
		} catch (e) {
			console.log('error: ' + e);
		}
	},
};
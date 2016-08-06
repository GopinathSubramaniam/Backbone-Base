package com.book.trip.util;

import com.book.trip.model.Status;

public class AppConstant {

	public static String STATUS_OK = "OK";
	public static String STATUS_FAIL = "FAILED";
	
	public static Integer STATUS_CODE_200 = 200;
	public static Integer STATUS_CODE_500 = 500;
	
	public static String SUCCESS_GET = "Fetched Successfully";
	public static String SUCCESS_INSERT = "Inserted Successfully";
	public static String SUCCESS_UPDATE = "Updated Successfully";
	public static String SUCCESS_DELETE = "Deleted Successfully";
	
	public static String FAIL_GET = "Error while fetching";
	public static String FAIL_INSERT = "Error while inserting";
	public static String FAIL_UPDATE = "Error while updating";
	public static String FAIL_DELETE = "Error while deleting";
	
	
	public static Status getStatus(String status, Integer statusCode, String statusMsg, Object obj){
		Status statusObj = new Status();
		statusObj.setStatus(status);
		statusObj.setStatusCode(statusCode);
		statusObj.setStatusMsg(statusMsg);
		statusObj.setObj(obj);
		return statusObj;
	}
}

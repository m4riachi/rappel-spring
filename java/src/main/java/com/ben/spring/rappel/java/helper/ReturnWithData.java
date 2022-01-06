package com.ben.spring.rappel.java.helper;

public class ReturnWithData {
    public String status = "success";
    public Object data;

    public ReturnWithData(String status, Object data) {
        this.status = status;
        this.data = data;
    }

    public ReturnWithData(Object data) {
        this.data = data;
    }
}

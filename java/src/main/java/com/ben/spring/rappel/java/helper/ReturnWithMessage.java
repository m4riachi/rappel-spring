package com.ben.spring.rappel.java.helper;

import java.util.ArrayList;
import java.util.List;

public class ReturnWithMessage {
    public String status = "success";
    public List<String> messages;

    public ReturnWithMessage(String status, List<String> messages) {
        this.status = status;
        this.messages = messages;
    }

    public ReturnWithMessage(String String, String message) {
        List<String> messages = new ArrayList<String>();
        messages.add(message);
        this.status = String;
        this.messages = messages;
    }
}

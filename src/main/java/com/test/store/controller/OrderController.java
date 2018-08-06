/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.test.store.controller;

import com.test.store.model.Order;
import com.test.store.service.OrderService;
import java.net.URI;
import java.net.URISyntaxException;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


public class OrderController {

    
	   OrderService orderService;

	@RequestMapping(value = "/saveOrder", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Void> crear(@RequestBody Order order, HttpServletRequest request) throws URISyntaxException {
		Long id = orderService.saveOrder(order);
		HttpHeaders header = new HttpHeaders();
		header.setLocation(new URI(request.getRequestURL() + "/" + id.toString()));
		return new ResponseEntity<Void>(header, HttpStatus.CREATED);
	}
}

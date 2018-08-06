package com.test.store.service;
import com.test.store.model.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class OrderServiceImpl implements OrderService {

	final private static Logger log = LoggerFactory.getLogger(OrderServiceImpl.class);
	
	@Override
	public Long saveOrder(Order order) {
		log.info("Se guardó la orden carrito: " + order);	
		return (long) Math.random();
	}

	

   

}

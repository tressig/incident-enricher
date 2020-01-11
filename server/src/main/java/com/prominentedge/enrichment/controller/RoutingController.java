package com.prominentedge.enrichment.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This controller redirects Spring error handling to Angular since they have been bundled together for ease of deployment
 * @author Tom
 *
 */
@Controller
public class RoutingController implements ErrorController {

	@RequestMapping("/error")
	public String index() {
		return "index.html";
	}
	
	@Override
	public String getErrorPath() {
		return "index.html";
	}

}

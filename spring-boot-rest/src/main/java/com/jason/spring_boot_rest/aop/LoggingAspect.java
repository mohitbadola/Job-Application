package com.jason.spring_boot_rest.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

                        //return type, class-name.method-name(args)
    @Before("execution (* com.jason.spring_boot_rest.service.JobService.getJob(..)) || " +
            "execution (* com.jason.spring_boot_rest.service.JobService.getAllJobs(..))")
    public void LogMethodCall(JoinPoint jp){
        LOGGER.info("method called " + jp.getSignature().getName());
    }
}

package com.jason.spring_boot_rest.service;

import com.jason.spring_boot_rest.model.JobPost;
import com.jason.spring_boot_rest.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;

    // method to add a jobPost
    public void addJob(JobPost jobPost){
        repo.addJob(jobPost);
    }

    //method to return all JobPosts
    public List<JobPost> getAllJobs(){
        return repo.getAllJobs();
    }
}

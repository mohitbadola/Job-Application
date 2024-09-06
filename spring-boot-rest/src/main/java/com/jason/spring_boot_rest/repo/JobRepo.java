package com.jason.spring_boot_rest.repo;

import com.jason.spring_boot_rest.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobRepo {
    List<JobPost> jobs= new ArrayList<>(Arrays.asList(
            new JobPost(1, "Java Developer", "Must have good experience in Core java and Advanced java",2, Arrays.asList("Core Java", "Spring Boot", "Hibernate")),
            new JobPost(2,"Frontend Developer", "Experience in building responsive web applications using React", 3, Arrays.asList ("HTML", "CSS", "JavaScript", "React")),
            new JobPost(3, "Data Analyst", "Experience in data analysis and visualization using tools like Python and SQL", 1, Arrays.asList("Python", "SQL", "Tableau", "Excel")),
            new JobPost(4, "DevOps Engineer", "Proficient in CI/CD pipelines, containerization, and cloud platforms", 4, Arrays.asList("Docker", "Kubernetes", "AWS", "CI/CD"))
            ));

    // method to return all JobPosts
    public List<JobPost> getAllJobs(){
    return jobs;
    }

    // method to save a job post object into arrayList
    public void addJob(JobPost job){
        jobs.add(job);
        System.out.println(jobs);
    }

    public JobPost getJob(int postId) {
        for(JobPost job: jobs){
            if(job.getPostId()==postId)
                return job;
        }
        return null;
    }

    public void updateJob(JobPost jobPost) {
        for(JobPost job: jobs){
            if(job.getPostId()==jobPost.getPostId()){
                job.setPostProfile(jobPost.getPostProfile());
                job.setPostDesc(jobPost.getPostDesc());
                job.setReqExperience(jobPost.getReqExperience());
                job.setPostTechStack(jobPost.getPostTechStack());
            }
        }
    }

    public void deleteJob(int postId) {
        jobs.removeIf(job -> job.getPostId() == postId);
    }
}

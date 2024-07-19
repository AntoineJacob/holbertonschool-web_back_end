import kue from 'kue';
import assert from 'assert';
import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();

describe('createPushNotificationsJobs', () => {
  before(function() {
    queue.testMode.enter();
  });
  
  afterEach(function() {
    queue.testMode.clear();
  });
  
  after(function() {
    queue.testMode.exit()
  });

  it('throw error message if jobs !array', () => {
    const mockJob = 'Hello world';
    assert.throws(
      () => { createPushNotificationsJobs(mockJob, queue); }, { name: 'Error', message: 'Jobs is not an array'},
    ); 
  });
  it('add two new jobs to the queue', function() {
    const mockJobs = [
        {
          phoneNumber: '4153518780',
          message: 'This is the code 1234 to verify your account'
        },
        {
          phoneNumber: '4153518781',
          message: 'This is the code 1234 to verify your account'
        }
    ];
    createPushNotificationsJobs(mockJobs, queue);
    assert.equal(queue.testMode.jobs.length, 2);
  });
  it('check the type of a job', function() {
    const mockJobs = [
        {
          phoneNumber: '4153518780',
          message: 'This is the code 1234 to verify your account'
        },
        {
          phoneNumber: '4153518781',
          message: 'This is the code 1234 to verify your account'
        }
    ];
    createPushNotificationsJobs(mockJobs, queue);
    assert.equal(queue.testMode.jobs[0].type, 'push_notification_code_3');
    assert.equal(queue.testMode.jobs[1].type, 'push_notification_code_3');
  });
  it('check the data of a job', function() {
    const mockJobs = [
        {
          phoneNumber: '4153518780',
          message: 'This is the code 1234 to verify your account'
        },
        {
          phoneNumber: '4153518781',
          message: 'This is the code 1234 to verify your account'
        }
    ];
    createPushNotificationsJobs(mockJobs, queue);
    assert.deepStrictEqual(queue.testMode.jobs[0].data, {
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    });
    assert.deepStrictEqual(queue.testMode.jobs[1].data, {
      phoneNumber: '4153518781',
      message: 'This is the code 1234 to verify your account'
    });
  });
});
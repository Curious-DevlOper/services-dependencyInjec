export class LoggingService {
    logStatusChange(status: string) {
        console.log('A srver status changed, new status: ' + status);
    }
}
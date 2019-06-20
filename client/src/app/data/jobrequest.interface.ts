export interface IJobRequest{
    barcode: string,
    name: string,
    jobId: string,
    description: string,
    startDate: Date,
    endDate: Date,
    manager: string
}
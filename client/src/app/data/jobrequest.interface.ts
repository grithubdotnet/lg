export interface IJobRequest{
    id: string,
    barcode: string,
    name: string,
    jobId: string,
    description: string,
    startDate: Date,
    endDate: Date,
    manager: string
}
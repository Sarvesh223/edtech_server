export declare class AnalyticsQueryDto {
    year?: number;
    months?: number;
    status?: string;
    interest?: string;
    stream?: string;
}
export declare class DateRangeDto {
    startDate?: string;
    endDate?: string;
}
export interface MonthlyStats {
    month: string;
    year: number;
    monthName: string;
    newUsers: number;
    totalEnquiries: number;
    uniqueEnquiries: number;
    repeatEnquiries: number;
    importantUsers: number;
    activeUsers: number;
    inactiveUsers: number;
}
export interface UserGrowthData {
    period: string;
    newUsers: number;
    totalUsers: number;
    growthRate: number;
}
export interface EnquiryAnalytics {
    period: string;
    totalEnquiries: number;
    newEnquiries: number;
    repeatEnquiries: number;
    conversionRate: number;
}
export interface InterestAnalytics {
    interest: string;
    count: number;
    percentage: number;
}
export interface StreamAnalytics {
    stream: string;
    count: number;
    percentage: number;
}
export interface DashboardAnalytics {
    overview: {
        totalUsers: number;
        totalEnquiries: number;
        importantUsers: number;
        activeUsers: number;
        todayUsers: number;
        thisMonthUsers: number;
        growthRate: number;
    };
    monthlyStats: MonthlyStats[];
    userGrowth: UserGrowthData[];
    enquiryAnalytics: EnquiryAnalytics[];
    interestBreakdown: InterestAnalytics[];
    streamBreakdown: StreamAnalytics[];
    recentActivity: {
        recentUsers: any[];
        recentEnquiries: any[];
    };
}

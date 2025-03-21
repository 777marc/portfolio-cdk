import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

interface PortfolioSiteStackProps extends cdk.StackProps {
  domainName: string;
  siteSubDomain: string;
}

export class PortfolioCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PortfolioSiteStackProps) {
    super(scope, id, props);

    const {domainName, siteSubDomain} = props;
    const siteDomain = `${siteSubDomain}.${domainName}`;

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: siteDomain,
      websiteIndexDocument: 'indexedDB.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

  }
}

#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PortfolioCdkStack } from '../lib/portfolio-cdk-stack';

const app = new cdk.App();
new PortfolioCdkStack(app, 'PortfolioCdkStack', {});
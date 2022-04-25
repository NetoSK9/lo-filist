import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export abstract class Live {
    abstract  id: string;
    abstract liveName: string;
    abstract channelName: string;
    abstract liveDate: string;
    abstract liveTime: string;
    abstract liveLink: string;
    abstract registrationDate: string;
    abstract urlSafe: SafeResourceUrl;
}
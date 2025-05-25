#include <bits/stdc++.h>
using namespace std;

int main()  {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // E.g. 'cin' for input & 'cout' for output
    string line;
    vector<int>v1;
    vector<int>v2;
    if(getline(cin,line)){
        stringstream ss(line);
        int num;
        while(ss>>num){
            v1.push_back(num);
        }
    }
    if(getline(cin,line)){
        stringstream ss(line);
        int num;
        while(ss>>num){
            v2.push_back(num);
        }
    }
    int timequant;
    cin>>timequant;
    vector<pair<int,int>>v;
    int n = v1.size();
    for(int i=0;i<n;i++){
        v.push_back({v1[i],i});
    }
    sort(v.begin(),v.end());
    int time =0;
    vector<int>complete(n);
    vector<int>remaining = v2;
    queue<int>cp;
    int completed =0;
    int i =0;
    while(completed<n){
        while(i<n && v[i].first<=time){
            cp.push(v[i].second);
            i++;
        }
        if(!cp.empty()){
            int p1 = cp.front();
            cp.pop();
            int timetake = min(remaining[p1],timequant);
            time+=timetake;
            remaining[p1]=remaining[p1]-timetake;
            if(remaining[p1]==0){
                complete[p1]=time;
                completed++;
            }
            else{
                while(i<n && v[i].first<=time){
                    cp.push(v[i].second);
                    i++;
                }
                cp.push(p1);
            }
        }
        else{
            time = v[i].first;
        }
    }
    int tat = 0;
    vector<int>tat1(n);
    int wait = 0;
    for(int i =0;i<n;i++){
        tat+=(complete[i]-v1[i]);
        tat1[i]=complete[i]-v1[i];
    }
    for(int i =0;i<n;i++){
        wait+=(tat1[i]-v2[i]);
    }
    cout<<wait/n<<endl<<tat/n<<endl;
    return 0;
}
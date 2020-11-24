import pandas as pd

authorData = pd.read_csv('data/csv/authorData.csv')

institutions = authorData['dept'].unique()
institutionData = pd.DataFrame()

i = 1
for institution in institutions:
    institutionProfessors = authorData[authorData['dept'] == institution]['name']
    facultyCount = institutionProfessors.count()
    publishingCount = 0
    publishingCountAdjusted = 0
    for professor in institutionProfessors:
        author = authorData[authorData['name'] == professor]
        professorPublishingCount = author['count'].sum()
        professorPublishingCountAdjusted = author['adjustedcount'].sum()
        publishingCount += professorPublishingCount
        publishingCountAdjusted += professorPublishingCountAdjusted
    publishingCountAverage = publishingCount / facultyCount
    publishingCountAdjustedAverage = publishingCountAdjusted / facultyCount
    df = pd.DataFrame.from_records([{'Name': institution,
                                     'Faculty Count': facultyCount,
                                     'Publishing Count': publishingCount,
                                     'Adjusted Publishing Count': publishingCountAdjusted,
                                     'Publishing Count Average': publishingCountAverage,
                                     'Adjusted Publishing Count Average': publishingCountAdjustedAverage}])
    institutionData = institutionData.append(df)
    print('Institution ' + str(i) + ' of ' + str(len(institutions)) + ' complete.')
    i += 1

institutionData.to_csv('data/csv/institutionData.csv')
institutionData.reset_index(inplace=True)
institutionData.to_json('data/institutionData.json')
print(institutionData)